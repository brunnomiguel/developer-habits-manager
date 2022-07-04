import styled, { css } from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.search ? "70%" : "100%")};
  height: ${(props) => (props.search ? "0px" : "80px")};

  margin: ${(props) => (props.search ? "none" : "10px 0")};
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
  width: 100%;
  height: ${(props) => (props.search ? "37px" : props.modal ? "36px" : "50px")};

  margin-top: ${(props) => (props.search ? "0" : "5px")};
  padding: ${(props) => (props.search ? "0 0 0 10px" : "5px")};

  background-color: ${(props) =>
    props.search ? "var(--green-2)" : "var(--white-1)"};
  color: var(--black-1);
  border-radius: 5px;

  display: flex;

  &:hover {
    border: ${(props) => (props.search ? "none" : "2px solid var(--green-1)")};
  }
  ${(props) =>
    props.isErrored &&
    css`
      border: 3px solid var(--red-error);
    `}

  input {
    background-color: transparent;
    color: var(--black-1);

    flex: 1;

    font-family: ${(props) =>
      props.search ? "var(--font-lexend)" : "var(--font-share-mono)"};
    &::placeholder {
      color: var(--black-2);
    }
  }

  div {
    display: ${(props) => (props.search ? "block" : "none")};

    width: 40px;

    background: var(--green-1);

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    position: relative;

    &:hover {
      opacity: 0.7;
      transition: 0.2s ease-out;
    }

    svg {
      color: var(--white-1);
      font-size: 25px;

      position: absolute;
      top: 4px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
`;
