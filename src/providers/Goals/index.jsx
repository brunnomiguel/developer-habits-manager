import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../User";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const [goals, setGoals] = useState([]);

  async function loadGoals(groupId) {
    const responseGoals = await api.get(`/goals/${groupId}/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const dataGoals = responseGoals.data;
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

  return (
    <GoalsContext.Provider value={{ goals, loadGoals, addNewGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};
