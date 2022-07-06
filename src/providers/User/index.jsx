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
        history.push("/habits");
      })
      .catch((_) => toast.error("Usuário ou senha inválidos!"));
  };

  const decodeJwt = token && jwtDecode(token);

  async function searchUser() {
    const responseUser = await api.get(`/users/${decodeJwt.user_id}/`);
    const { username } = responseUser.data;
    setUser(username);
    localStorage.setItem("DHM/user", username);
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
        toast.error(`Ops, digite nome de usuário / email diferente`);
      });
  };

  useEffect(() => {
    token && searchUser();
  }, [token]);

  return (
    <UserContext.Provider
      value={{ token, setToken, user, setUser, decodeJwt, signIn, updateUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
