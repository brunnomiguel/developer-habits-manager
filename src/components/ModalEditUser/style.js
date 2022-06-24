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
  width: 300px;
  height: 325px;
  background-color: var(--gray-5);
  box-shadow: 3px 2px 6px rgba(0, 0, 0, 0.7);
`;

export const Header = styled.div`
  background-color: var(--green-2);
  width: 100%;
  height: 46px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background: transparent;
  }

  svg {
    color: #000;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 75%;
  height: auto;

  form {
    div{
        div:nth-child(1){
        margin-top: 15px;
    }
    }

    button {
      margin-top: 10px;
      &:hover {
        transition: 0.2s ease-in;
        opacity: 0.7;
      }
    }
  }
`;
