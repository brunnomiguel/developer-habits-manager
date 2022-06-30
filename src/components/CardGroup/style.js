import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--font-share-tech);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 250px;
  height: 250px;
  margin-bottom: 38px;
  border-radius: 5px none;
  box-shadow: 1px 1px 3px var(--gray-2);

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

  hr {
    margin: 5px 0 5px 0;
    width: 80%;
    border: 2px;
    height: 2px;
    background-color: var(--gray-4);
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;

  span,
  p {
    color: var(--black-2);
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100%;
  height: 70px;
  margin-bottom: 10px;
  span,
  p {
    color: var(--black-2);
    margin-bottom: 10px;
  }
  div {
    /* esta div tem o conjunto de botoes, e outro separado que fica a direita */
    display: flex;
    flex-direction: row;
    width: 100%;
    /* o justify, agrupa o conjunto de dois a esqueda, e o botao sozinho no canto da direita */
    justify-content: space-between;
    div {
      /* esta div contém dois botoões que ficam juntos a esquerda */
      display: flex;
      flex-direction: row;
    }
  }
`;
