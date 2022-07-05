import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { UserContext } from "../../providers/User";
import { ModalContext } from "../../providers/Modal";

import { Container, Content, NavLink } from "./style";
import { FiUser, FiLogOut } from "react-icons/fi";

import ModalEditUser from "../ModalEditUser";

const Navbar = () => {
  const { setToken, user } = useContext(UserContext);
  const { openEditUser, setOpenEditUser } = useContext(ModalContext);

  const { pathname } = useLocation();

  const logout = () => {
    localStorage.clear();
    setToken("");
  };

  return (
    <>
      <Container>
        <Content>
          <h2 onClick={() => setOpenEditUser(true)}>
            <FiUser />
            Olá, {user}
          </h2>
          <nav>
            <ul>
              <NavLink
                selected={
                  pathname === "/Groups" ||
                  pathname === "/YourGroups" ||
                  pathname === "/AllGroups"
                }
                to="/Groups"
              >
                Grupos
              </NavLink>
              <NavLink selected={pathname === "/Habits"} to="/Habits">
                Hábitos
              </NavLink>
            </ul>
          </nav>
          <FiLogOut onClick={logout} />
        </Content>
      </Container>
      {openEditUser && <ModalEditUser />}
    </>
  );
};

export default Navbar;
