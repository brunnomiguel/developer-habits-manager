import styled, {css} from "styled-components";

export const Container = styled.div`
  margin: 10px 0 10px 0;
  text-align: left;
  width: 100%;
  height: 80px;

  
`;

export const InputContainer = styled.div`
  background: var(--white-1);
  border-radius: 5px;
  border: none;
  margin-top: 5px;
  color: var(--black-1);
  padding: 5px;
  display: flex;
  width: 100%;
  height: 50px;

  &:hover {
    border: 2px solid var(--green-1);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red-error);
    `}

  input {
    background: transparent;
    flex: 1;
    border: none;
    color: var(--black-1);
    &::placeholder {
      color: var(--gray);
    }
  }
`;
