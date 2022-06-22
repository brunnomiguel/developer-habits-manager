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
  color: var(--white-1);

  @media (min-width: 720px) {
    padding: 20px 0 20px 0;
  }
`;

export const Content = styled.div`
  width: 90%;
  padding: 15px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 720px) {
    position: static;
  }

  svg {
    font-size: 20px;
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      @media (min-width: 720px) {
      }

      a {
        color: inherit;
        font-weight: 600;
      }

      a + a {
        margin-left: 100px;
      }
    }
  }
`;
