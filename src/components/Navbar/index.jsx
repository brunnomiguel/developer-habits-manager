import { FiUser, FiLogIn } from "react-icons/fi";
import { Container, Content, NavLink } from "./style";

import { useLocation } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { ModalContext } from "../../providers/Modal";

import ModalEditUser from "../ModalEditUser";

const Navbar = () => {
  const { setToken, user } = useContext(UserContext);
  const { setEditUser, editUser } = useContext(ModalContext);

  const { pathname } = useLocation();

  const logout = () => {
    localStorage.clear();
    setToken("");
  };

  return (
    <Container>
      <Content>
        <h2 onClick={() => setEditUser(true)}>
          <FiUser />
          Olá, {user}
        </h2>
        <nav>
          <ul>
            <NavLink selected={pathname === "/Groups"} to="/Groups">
              Grupos
            </NavLink>
            <NavLink selected={pathname === "/Habits"} to="/Habits">
              Hábitos
            </NavLink>
          </ul>
        </nav>
        <FiLogIn onClick={logout} />
      </Content>
      {editUser && <ModalEditUser />}
    </Container>
  );
};

export default Navbar;
