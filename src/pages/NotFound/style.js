import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--black-1);
    font-size: 30px;
    text-align: center;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }
`;
