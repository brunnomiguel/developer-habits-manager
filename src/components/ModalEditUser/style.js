import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 10;
  top: -0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 18, 20, 0.5);
`;

export const Header = styled.div`
  width: 280px;
  height: 46px;
  padding: 0 15px;

  border-radius: 5px 5px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--green-2);

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    font-family: var(--font-share-tech);
  }

  button {
    background-color: transparent;
  }

  svg {
    color: #000;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 280px;
  height: 270px;
  padding: 10px 20px;
  background-color: var(--gray-4);
  border-radius: 0 0 5px 5px;

  form {
    div {
      div:nth-child(1) {
        margin-top: 15px;
      }
    }

    button {
      margin-top: 10px;
      height: 39px;
      &:hover {
        transition: 0.2s ease-in;
        opacity: 0.7;
      }
    }
  }
`;
