import { FiUser, FiLogIn } from "react-icons/fi";
import { useLocation } from "react-router-dom";

import { Container, Content, NavLink } from "./style";

import { useContext } from "react";

import {UserContext} from "../../providers/User"

const Navbar = () => {

  
  const {pathname} = useLocation();

  const {user} = useContext(UserContext)
  return (
    <Container>
      <Content>
        <h2><FiUser/>Olá, {user}</h2>

        <nav>
          <ul>
            <NavLink selected={pathname === "/groups"} to="/groups">Grupos</NavLink>
            <NavLink selected={pathname === "/Habits"} to="/Habits">Hábitos</NavLink>
          </ul>
        </nav>

        <FiLogIn />
      </Content>
    </Container>
  );
};

export default Navbar;
