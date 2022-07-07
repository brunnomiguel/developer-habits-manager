import { createContext, useContext, useState } from "react";
import { UserContext } from "../User";

import { toast } from "react-toastify";
import api from "../../services/api";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const { token } = useContext(UserContext);

  const [activities, setActivities] = useState([]);
  const [pageActivities, setPageActivities] = useState(1);
  const [data, setdata] = useState("");


  async function loadActivities(groupId) {
    const responseActivities = await api.get(
      `/activities/?group=${groupId}&page=${pageActivities}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const dataActivities = responseActivities.data.results.map((activity) => ({
      ...activity,
      realization_time: new Date(activity.realization_time).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    }));
    setActivities(dataActivities);
    setdata(responseActivities.data)
  }

  const addNewActivity = (data, groupId) => {
    const { realization_time } = data;
    const date = new Date(realization_time);
    const isoFormat = date.toISOString();

    data.realization_time = isoFormat;
    data.group = groupId;

    api
      .post(`/activities/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Atividade adicionada com sucesso!");
        loadActivities(groupId);
      })
      .catch((_) => toast.error("Ops... algo deu errado."));
  };

  const updateActivity = (data, activityId, groupId) => {
    api
      .patch(`/activities/${activityId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Atividade atualizada com sucesso!");
        loadActivities(groupId);
      })
      .catch((_) => toast.error("Ops... algo deu errado."));
  };

  const deleteActivity = (activityId, groupId) => {
    api
      .delete(`/activities/${activityId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Atividade excluída!");
        loadActivities(groupId);
        if(pageActivities > 1){
          setPageActivities(pageActivities - 1)
        }
      })
      .catch((_) => toast.error("Ops... algo deu errado."));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        activities,
        loadActivities,
        addNewActivity,
        updateActivity,
        deleteActivity,
        pageActivities,
        setPageActivities,
        data
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
