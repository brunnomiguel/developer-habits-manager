import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 280px;
  height: 280px;
  padding: 20px;
  margin: 20px;

  border-radius: 5px;
  box-shadow: 1px 1px 7px var(--gray-2);
  font-family: var(--font-share-tech);

  h3 {
    color: var(--black-1);
    font-size: 16px;
    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  hr {
    margin: 5px 0;
    width: 100%;
    border: 2px;
    height: 2px;
    background-color: var(--gray-4);
  }

  p {
    color: var(--black-1);

    display: flex;
    justify-content: space-between;

    width: 100%;
  }
  span {
    color: var(--gray-2);
    margin-bottom: 20px;
  }

  div {
    width: 100%;

    display: flex;
    justify-content: center;

    button {
      width: 50px;
      margin: 5px;
    }
  }
`;
