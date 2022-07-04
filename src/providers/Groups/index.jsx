import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../User";

import api from "../../services/api";
import { toast } from "react-toastify";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const { token } = useContext(UserContext);

  const [allGroups, setAllGroups] = useState([]);
  const [groupsSubscribed, setGroupsSubscribed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  async function loadAllGroups() {
    const responseGroups = await api.get(`/groups/?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const groupsData = responseGroups.data;
    setLoading(false);
    setAllGroups(groupsData);
  }

  async function loadSubscribedUserGroups() {
    const responseGroups = await api.get("/groups/subscriptions/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const groupsData = responseGroups.data;

    setGroupsSubscribed(groupsData);
  }

  useEffect(() => {
    if (token) {
      loadAllGroups();
      loadSubscribedUserGroups();
    }
  }, [token, page]);

  const createNewGroup = (data) => {
    api
      .post("/groups/", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => {
        toast.success("Grupo criado com sucesso.");
        loadSubscribedUserGroups();
      });
  };

  const editGroup = (data, groupId) => {
    api
      .patch(`/groups/${groupId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Edição realizada com sucesso");
        loadSubscribedUserGroups();
        loadAllGroups();
      })
      .catch((_) =>
        toast.error("Não é possível editar, você não é o criador desse grupo.")
      );
  };

  const subscribeToTheGroup = (groupId) => {
    api
      .post(`/groups/${groupId}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Inscrição realizada com sucesso!");
        loadSubscribedUserGroups();
        loadAllGroups();
      })
      .catch((_) => toast.error("Você já está inscrito nesse grupo!"));
  };

  const unSubscribeGroup = (groupId) => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Desinscrição realizada!");
        loadAllGroups();
        loadSubscribedUserGroups();
      })
      .catch((_) => toast.error("Você não está inscrito nesse grupo."));
  };

  return (
    <GroupsContext.Provider
      value={{
        allGroups,
        groupsSubscribed,
        createNewGroup,
        editGroup,
        subscribeToTheGroup,
        unSubscribeGroup,
        loading,
        page,
        setPage,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
