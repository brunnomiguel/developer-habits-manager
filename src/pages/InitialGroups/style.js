import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  button {
    margin: 15px;
    font-size: 15px;
    height: 43px;
    &:hover {
      opacity: 0.7;
      transition: 0.2s ease-out;
    }
  }
`;
