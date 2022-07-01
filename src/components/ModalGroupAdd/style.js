import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100%;

  position: fixed;
  z-index: 10;
  top: -0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(18, 18, 20, 0.5);
`;

export const AddGroupModalHeader = styled.div`
  width: 280px;
  height: 46px;

  background-color: var(--green-2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-left: 10px;

    font-family: var(--font-share-tech);
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }

  button {
    margin-right: 10px;

    width: 22px;
    height: 22px;

    background: transparent;
  }
`;

export const AddGroupModalEdit = styled.div`
  width: 280px;

  background-color: var(--gray-4);

  div {
    width: 222px;
    margin: 10px auto;

    label {
      font-size: 15px;
    }
    button {
      height: 39px;
      margin: 20px 0;
    }
  }
`;
