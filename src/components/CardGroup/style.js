import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--font-share-mono);
  font-size: 1.5rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 200px;
  width: 100%;
  margin: 10px 0;
  border-radius: 5px none;
  padding: 10px 50px 10px 50px;
  box-shadow: 1px 1px 3px var(--gray-2);

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
  @media screen and (min-width: 600px) {
  }

  hr {
    margin: 20px 0 10px 0;
    width: 100%;
    border: 2px;
    height: 2px;
    background-color: var(--gray-4);
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  font-weight: 700;
  width: 100%;
  /* height: 50px; */

  p {
    width: 100%;
    font-size: 16px;
  }
  @media screen and (max-width: 300px) {
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.2rem;
    }
    span {
      font-size: 1rem;
    }
    div {

      button {
        width: 40px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    p {
      /* font-size: 1.5rem; */
    }
    span {
      font-size: 1.2rem;
    }
    button {
      width: 40px;
    }
  }

  span,
  p {
    margin-left: 10px;
    color: var(--black-2);
  }
  button {
    width: 80px;
  }
  div {
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
    display: flex;
    span {
      margin-right: 10px;
    }
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 70px;
  
  @media screen and (max-width: 600px) {
    p,
    span {
      font-size: 1.2rem;
    }
    div {
      /* justify-content: center; */
      div {
        button {
          font-size: 0.9rem;
          width: 85px;
          margin-left: 5px;
          margin-right: 5px;
        }
      }
      button {
        width: 50px;
        margin-left: 1px;
      }
    }
  }

  span,
  p {
    max-width: 90%; /* Limite maximo do texto*/
    white-space: nowrap; /* Removendo quebra de linha */
    overflow: hidden; /* Removendo a barra de rolagem */
    text-overflow: ellipsis; /* Adicionando "..." ao final do texto */
    padding: 5px;
    font-size: 1rem;
    color: var(--black-2);
    margin-bottom: 15px;
    margin-left: 10px;
  }
  div {
    display: flex;
    width: 100%;
    button {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0 10px 0 10px;
    }
    div {
      display: flex;
    }
  }
`;
