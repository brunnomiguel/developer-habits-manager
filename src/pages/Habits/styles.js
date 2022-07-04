import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--white-1);

  min-height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .adjustment {
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
  }
`;

export const Tittle = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;

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

export const CardsContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  gap: 20px;

  padding: 20px;
`;

export const PageButtons = styled.div`
  display: flex;
  justify-content: center;

  gap: 2px;
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
