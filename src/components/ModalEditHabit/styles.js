import styled from "styled-components";

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

export const EditHabitModalHeader = styled.div`
  width: 280px;
  height: 46px;

  background-color: var(--green-2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-left: 10px;
    font-family: var(--font-share-tech);
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }

  button {
    margin-right: 10px;
    width: 22px;
    height: 22px;
    background: transparent;
  }
`;

export const Content = styled.div`
  width: 280px;
  height: 180px;

  background-color: var(--gray-4);

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 100%;
    padding: 20px 0px 10px 30px;
    font-family: var(--font-share-mono);
    font-size: 16px;
  }

  div {
    width: 222px;
    height: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: var(--font-share-tech);
    font-size: 16px;

    h6 {
      display: flex;
      justify-content: space-between;
      width: 10px;
      margin-top: 20px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      background-color: transparent;
      width: 100%;

      &:hover {
        border: none;
      }

      input {
        width: 230px;
        margin: 10px 0;
        cursor: pointer;
      }
    }

    button {
      margin-top: 20px;
    }
  }
`;
