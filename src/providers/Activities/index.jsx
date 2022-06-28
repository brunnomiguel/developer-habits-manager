import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../User";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const [activities, setActivities] = useState([]);

  async function loadActivities(groupId) {
    const responseActivities = await api.get(`/activities/${groupId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const dataActivities = responseActivities.data;
    setActivities(dataActivities);
  }

  // const addNewActivity = (data, groupId) => {
  //   data.group = groupId;
  //   api
  //     .post(`/activities/`, data, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((_) => {
  //       toast.success("Atividade adicionada com sucesso!");
  //       loadActivities(groupId);
  //     });
  // };

  const deleteActivity = (activityId, groupId) => {
    api
      .delete(`/activities/${activityId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Atividade excluída!");
        loadActivities(groupId);
      })
      .catch((_) => toast.error("Ops... algo deu errado."));
  };

  return (
    <ActivitiesContext.Provider value={{ activities, loadActivities, deleteActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
};
