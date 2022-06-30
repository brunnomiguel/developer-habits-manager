import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 128px;
  width: 228px;
  gap: 20px;
  margin-bottom: 14px;
  background-color: var(--white-1);
  box-shadow: 1px 1px 3px var(--gray-2);

  @media screen and (min-width: 769px) {
    width: 300px;
    height: 155px;
    justify-content: center;
  }
`;

export const CardHeader = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  p {
    font-family: var(--font-lexend);
    color: var(--black-1);
  }

  hr {
    width: 90%;
    border: 2px;
    height: 2px;
    align-self: center;
    background-color: var(--gray-4);
  }
`;

export const DateTime = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  p {
    font-family: var(--font-lexend);
    color: var(--black-1);
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    width: 36px;
    height: 26px;
  }
`;
