import styled from "styled-components";

export const Container = styled.div`
  width: 228px;
  height: 128px;
  margin: 10px auto;
  padding: 10px;

  display: flex;
  flex-direction: column;
  text-align: center;

  background-color: var(--white-1);
  box-shadow: 1px 1px 3px var(--gray-2);

  @media screen and (min-width: 769px) {
    width: 300px;
    height: 155px;

    justify-content: center;
  }
`;

export const Header = styled.div`
  width: 100%;

  h3 {
    text-align: center;
    font-size: 16px;
    font-family: var(--font-lexend);
    padding-bottom: 5px;
    color: var(--black-1);
  }
  hr {
    width: 90%;
    height: 2px;
    background-color: var(--gray-4);
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-bottom: 15px;
  p {
    font-size: 16px;
    font-family: var(--font-lexend);
    text-align: center;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  button {
    width: 36px;
    height: 26px;
    margin: 8px;
  }
`;
