import { createContext, useContext, useEffect, useState } from "react";
import { UserProvider } from "../User";

import api from "../../services/api";
import { toast } from "react-toastify";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const { token, decodeJwt } = useContext(UserProvider);
  const [allGroups, setAllGroups] = useState([]);
  const [groupsSubscribed, setGroupsSubscribed] = useState([]);
  const [userCreatedGroups, setUserCreatedGroups] = useState([]);

  async function loadAllGroups() {
    const responseGroups = await api.get("/groups/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const groupsData = responseGroups.data;
    setAllGroups(groupsData);
  }

  async function loadUserCreatedGroups() {
    const responseGroups = await api.get("/groups/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const groupsData = responseGroups.data.filter(
      (group) => group.creator.id === decodeJwt.user_id
    );
    setUserCreatedGroups(groupsData);
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
      loadUserCreatedGroups();
    }
  }, [token]);

  const createNewGroup = (data) => {
    api
      .post("/groups/", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => {
        toast.success("Grupo criado com sucesso.");
        loadAllGroups();
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
      })
      .catch((_) =>
        toast.error("Não é possível editar, você não é o criador desse grupo.")
      );
  };

  const subscribeToTheGroup = (groupID) => {
    api
      .post(`/groups/${groupID}/subscribe/`)
      .then((_) => {
        toast.success("Inscrição realizada com sucesso!");
        loadAllGroups();
      })
      .catch((_) => toast.error("Você já está inscrito nesse grupo!"));
  };

  return (
    <GroupsContext
      value={{
        allGroups,
        userCreatedGroups,
        groupsSubscribed,
        createNewGroup,
        editGroup,
        subscribeToTheGroup,
      }}
    >
      {children}
    </GroupsContext>
  );
};
