import React from "react";

import { FiUser, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Content } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Content>
        <h2><FiUser/>Olá, Eric</h2>

        <nav>
          <ul>
            <Link>Grupos</Link>
            <Link>Hábitos</Link>
          </ul>
        </nav>

        <FiLogIn />
      </Content>
    </Container>
  );
};

export default Navbar;
