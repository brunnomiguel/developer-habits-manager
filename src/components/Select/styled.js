import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  div {
    width: 100%;
    margin-bottom: 10px;
    label {
      font-family: var(--font-share-mono);
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 36px;
  padding: 5px;

  background-color: var(--white-1);
  font-family: var(--font-lexend);
  font-weight: 600;
`;
