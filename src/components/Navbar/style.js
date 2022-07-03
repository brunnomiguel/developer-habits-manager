import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: auto;
  padding-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  background: rgb(42, 152, 152);
  background: linear-gradient(
    100deg,
    rgba(42, 152, 152, 1) 18%,
    rgba(95, 225, 201, 1) 100%
  );

  h2 {
    color: var(--white-1);
    cursor: pointer;
  }

  @media (min-width: 720px) {
    padding: 20px 0 20px 0;
  }
`;

export const Content = styled.div`
  width: 90%;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  @media (min-width: 720px) {
    position: static;
  }

  svg {
    font-size: 20px;
    color: var(--white-1);
    cursor: pointer;
  }

  h2 svg {
    margin-right: 5px;
  }

  nav {
    position: absolute;
    top: 110%;
    left: 54%;
    transform: translate(-50%);

    @media (min-width: 720px) {
      position: static;
      transform: translate(0);
    }

    ul {
      width: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        color: var(--white-1);
        font-weight: 600;
        font-family: var(--font-lexend);
      }

      a + a {
        margin-left: 100px;
      }
    }
  }
`;

export const NavLink = styled(Link)`
  border-bottom: ${(props) => (props.selected ? "1px solid #fff" : "none")};
  padding-bottom: ${(props) => (props.selected ? "1px" : "none")};
`;
