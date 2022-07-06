import { createContext, useState, useContext } from "react";
import { UserContext } from "../User";

import api from "../../services/api";
import { toast } from "react-toastify";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const [goals, setGoals] = useState([]);
  const [total, setTotal] = useState(0);
  const [groupPage, setGroupPage] = useState(0);
  const [data, setData] = useState("")

  async function loadGoals(groupId) {
    const responseGoals = await api.get(
     `/goals/?group=${groupId}&page=${groupPage || 1}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const dataGoals = responseGoals.data.results.filter(
      (goal) => goal.achieved === false
    );

    setTotal(responseGoals.data.count);
    setData(responseGoals.data)
    setGoals(dataGoals);
  }

  const addNewGoal = (data, groupId) => {
    data.group = groupId;
    data.achieved = false;
    data.how_much_achieved = 0;
    api
      .post("/goals/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Meta adicionada com sucesso!");
        loadGoals(groupId);
      })
      .catch((_) => toast.error("Ops... algo deu errado."));
  };

  const updateGoal = (goalId, groupId) => {
    const data = { achieved: true };
    api
      .patch(`/goals/${goalId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Meta atualizada com sucesso!");
        loadGoals(groupId);
      })
      .catch((_) => toast.error("Ops... algo deu errado."));
  };

  const deleteGoal = (goalId, groupId) => {
    api
      .delete(`/goals/${goalId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Meta excluída!");
        loadGoals(groupId);
      })
      .catch((_) => toast.error("Ops... algo deu errado."));
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        loadGoals,
        addNewGoal,
        updateGoal,
        deleteGoal,
        groupPage,
        setGroupPage,
        total,
        data
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
