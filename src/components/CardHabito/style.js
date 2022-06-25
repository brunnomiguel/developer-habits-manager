import styled from "styled-components";

export const ContainerGeral = styled.div`
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

  span {
    color: var(--gray-2);
    margin-bottom: 20px;
  }
  p {
    color: #000000;
  }
  hr {
    margin: 5px 0 5px 0;
    width: 80%;
    border: 2px;
    height: 2px;
    background-color: var(--gray-4);
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    span {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
