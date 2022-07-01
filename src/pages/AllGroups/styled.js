import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--white-1);
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tittle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;

  h2 {
    text-align: center;
  }

  @media screen and (min-width: 600px) {
    justify-content: center;
  }
`;

export const AddBttn = styled.div`
  display: flex;
  align-items: baseline;
  gap: 11px;

  span {
    display: none;
  }

  button {
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 600px) {
    button {
      display: none;
    }
  }
`;

export const CardsContainer = styled.div`
  overflow-y: scroll;
  height: 550px;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;

  margin-top: 35px;
  padding: 20px;

  @media screen and (min-width: 769px) {
    width: 750px;
  }
`;

export const PageButtons = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  margin: 20px 0;

  button {
    width: 35px;
    height: 30px;
  }

  span {
    width: 35px;
    height: 30px;
    border-radius: 5px;
    background-color: var(--gray-6);
    color: var(--black-1);
    font-family: var(--font-lexend);
    font-size: 16px;
    text-align: center;
    padding: 4px;
  }
`;

export const InputBttnContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  button {
    display: none;
  }

  @media screen and (min-width: 600px) {
    justify-content: space-around;
    height: 37px;

    button {
      display: block;
      height: 37px;
      width: 37px;
    }
  }

  @media screen and (min-width: 769px) {
    span {
      display: block;
      font-family: var(--font-lexend);
      font-size: 18px;
    }
  }
`;
