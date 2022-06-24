import { createContext, useContext, useEffect, useState } from "react";

import api from "../../services/api";
import jwtDecode from "jwt-decode";

import { UserContext } from "../User";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const [habits, setHabits] = useState([]);

  async function loadHabits() {
    const responseHabits = await api.get("/habits/personal/", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const dataHabits = responseHabits.data;

    setHabits(dataHabits);
  }

  useEffect(() => {
    loadHabits();
  }, [habits]);

  const decodeJWT = token && jwtDecode(token);

  const addNewHabit = (data) => {
    data.user = decodeJWT.user_id;
    data.achieved = false;
    data.how_much_achieved = 0;

    api
      .post("/habits/", data, { headers: { Authorization: `Bearer ${token}` } })
      .then((_) => loadHabits());
  };


  return (
    <HabitsContext.Provider value={{ habits, addNewHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};
