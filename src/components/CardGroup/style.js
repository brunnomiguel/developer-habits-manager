import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--font-share-mono);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;
  margin: 10px 0;

  border-radius: 5px 0;
  padding: 10px 20px 10px 20px;
  box-shadow: 1px 1px 3px var(--gray-2);

  hr {
    width: 100%;
    height: 2px;
    margin: 10px 0;

    background-color: var(--gray-4);
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  font-weight: 700;

  p {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: var(--black-2);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    width: 40px;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  p {
    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    padding: 5px 0;
    font-size: 1rem;
    color: var(--black-2);
    margin-bottom: 15px;
  }
  div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 70%;

      display: flex;
      justify-content: start;
      align-items: center;
      gap: 5px;

      button {
        font-size: 16px;
        font-weight: 700;
      }
    }
    div:last-child {
      width: 30%;
      display: flex;
      justify-content: end;

      button {
        width: 40px;
      }
    }
  }
`;
