import styled, { css } from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.search ? "70%" : "100%")};
  height: ${(props) => (props.search ? "0px" : "80px")};
  margin: ${(props) => (props.search ? "none" : "10px 0 10px 0")};

  text-align: left;
  label {
    font-family: var(--font-share-mono);
    span {
      ${(props) =>
        props.isErrored &&
        css`
          color: var(--red-error);
        `}
    }
  }

  @media screen and (min-width: 600px) {
    width: ${(props) => (props.search ? "419px" : "100%")};
  }
`;

export const InputContainer = styled.div`
  background: ${(props) =>
    props.search ? "var(--green-2)" : "var(--white-1)"};
  height: ${(props) => (props.search ? "37px" : props.modal ? "36px" : "50px")};
  margin-top: ${(props) => (props.search ? "0" : "5px")};

  border-radius: 5px;
  border: none;
  color: var(--black-1);
  padding: 5px;
  display: flex;
  width: 100%;

  &:hover {
    border: ${(props) => (props.search ? "none" : "2px solid var(--green-1)")};
  }

  ${(props) =>
    props.isErrored &&
    css`
      border: 3px solid var(--red-error);
    `}

  input {
    background: transparent;
    flex: 1;
    border: none;
    color: var(--black-1);

    font-family: ${(props) =>
      props.search ? "var(--font-lexend)" : "var(--font-share-mono)"};

    &::placeholder {
      color: var(--black-2);
    }
  }

  svg {
    display: ${(props) => (props.search ? "block" : "none")};
    margin: 2px 11px;
    color: var(--white-1);
  }
`;
