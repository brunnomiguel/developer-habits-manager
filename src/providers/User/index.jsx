import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify/dist/core";

import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@DHM/token") || ""
  );

  const history = useHistory();

  const signIn = (data) => {
    api
      .post("/sessions/", data)
      .then((res) => {
        const { access } = res.data;
        setToken(access);
        localStorage.setItem("@DHM/token", access);
        toast.success("Login realizado com sucesso")
        history.push("/habits");
      })
      .catch((_) => toast.error("Usuário ou senha inválidos!"));
  };

  return (
    <UserContext.Provider value={{ token, signIn }}>
      {children}
    </UserContext.Provider>
  );
};
