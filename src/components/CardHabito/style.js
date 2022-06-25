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
  box-shadow: 3px 3px 3px 3px var(--gray-2);

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
  }
  p {
    color: #000000;
  }
  hr {
    width: 100%;
    border: 0;
    height: 2px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin-top: 10px;
  }
`;
