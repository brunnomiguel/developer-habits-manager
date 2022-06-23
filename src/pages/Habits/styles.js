import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--white-1);
  /* height: 100vh; */
  height: 100%;
  /* width: 100vmax; */
`;

export const Tittle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 600px) {
    justify-content: center;
  }
`;

export const AddBttn = styled.div`
  display: flex;
  gap: 11px;

  span {
    display: none;
  }

  button {
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 600px) {
    span {
      font-family: var(--font-lexend);
      font-size: 20px;
    }

    button {
      display: none;
    }
  }
`;

export const InputTest = styled.input`
  width: 252px;
  height: 37px;
  background-color: var(--green-2);
  border-radius: 5px;
  font-size: 20px;
  padding-left: 52px;
  font-family: var(--font-lexend);
  color: var(--gray-1);
  margin-bottom: 20px;
  /* margin-left: 20px;
  margin-right: 20px; */
  display: flex;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 35px;

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  width: 252px;
  height: 255px;
  background-color: black;
  margin-bottom: 38px;

  @media screen and (min-width: 600px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (min-width: 769px) {
    margin-left: 40px;
    margin-right: 40px;
  }

  @media screen and (min-width: 900px) {
    margin-left: 97px;
    margin-right: 97px;
  }
`;

export const PageButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  justify-content: center;
  padding-bottom: 20px;

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
  justify-content: stretch;

  button {
    display: none;
  }

  @media screen and (min-width: 600px) {
    justify-content: center;

    button {
      display: block;
    }

    span {
      display: block;
      font-family: var(--font-lexend);
      font-size: 18px;
    }
  }
`;
