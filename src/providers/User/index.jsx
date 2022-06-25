import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import jwtDecode from "jwt-decode";
import api from "../../services/api";

import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("@DHM/token") || "");
  const [user, setUser] = useState(localStorage.getItem("DHM/user") || "");

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
      const { username } = responseUser.data;
      setUser(username);
      localStorage.setItem("DHM/user", username);
    }
  }

  const updateUser = (data, closeEdit) => {
    api
      .patch(`/users/${decodeJwt.user_id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success("Usuário Atualizado");
        localStorage.setItem("DHM/user", data.username);
        setUser(data.username);
        closeEdit(true);
      })
      .catch((_) => {
        toast.error(`Ops, Algo deu errado 😔`);
      });
  };

  useEffect(() => {
    searchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ token, setToken, user, setUser, signIn, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
