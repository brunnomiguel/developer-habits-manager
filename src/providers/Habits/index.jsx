import { createContext, useContext, useEffect, useState } from "react";

import api from "../../services/api";

import { UserContext } from "../User";
import { toast } from "react-toastify";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const { token, decodeJwt } = useContext(UserContext);

  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadHabits() {
    const responseHabits = await api.get("/habits/personal/", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const dataHabits = responseHabits.data.filter(
      (habit) => habit.achieved === false
    );

    setLoading(false);
    setHabits(dataHabits);
  }

  useEffect(() => {
    token && loadHabits();
  }, [token]);

  const addNewHabit = (data) => {
    data.user = decodeJwt.user_id;
    data.achieved = false;
    data.how_much_achieved = 0;

    api
      .post("/habits/", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => {
        toast.success("Hábito criado com sucesso");
        loadHabits();
      })
      .catch((_) => toast.error("Ops... algo deu errado."));
  };

  const updateHabit = (data, habitId) => {
    const { how_much_achieved } = data;
    if (how_much_achieved === 100) {
      data.achieved = true;
    } else {
      data.achieved = false;
    }
    api
      .patch(`/habits/${habitId}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Hábito atualizado");
        loadHabits();
      });
  };

  const deleteHabit = (habitId) => {
    api
      .delete(`/habits/${habitId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Hábito excluído");
        loadHabits();
      })
      .catch((_) => toast.error("Ops... O hábito não foi identificado."));
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
        loading,
        addNewHabit,
        deleteHabit,
        updateHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
