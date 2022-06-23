import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@DHM/token") || "");
  const [user, setUser] = useState(localStorage.getItem("DHM/user",) || "");

  const history = useHistory();

  const signIn = (data) => {
    api
      .post("/sessions/", data)
      .then((res) => {
        const { access } = res.data;
        setToken(access);
        localStorage.setItem("@DHM/token", access);
        toast.success("Login realizado com sucesso");
        history.push("/habits");
      })
      .catch((_) => toast.error("Usuário ou senha inválidos!"));
  };

  const decodeJwt = token && jwtDecode(token);

  async function searchUser() {
    if (token) {
      const responseUser = await api.get(`/users/${decodeJwt.user_id}/`);
      console.log(responseUser.data);
      const { username } = responseUser.data;
      setUser(username);
      localStorage.setItem("DHM/user", username);
    }
  }

  useEffect(() => {
    searchUser();
  }, [token]);

  return (
    <UserContext.Provider value={{ token, user, signIn }}>
      {children}
    </UserContext.Provider>
  );
};
