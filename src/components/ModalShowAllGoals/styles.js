import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalHeader = styled.div`
  height: 46px;
  background-color: var(--green-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-share-tech);
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;

  svg {
    background: transparent;
    color: var(--green-1);
    font-size: 16px;
    cursor: pointer;
  }

  @media screen and (min-width: 769px) {
    height: 60px;
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white-1);
  width: 280px;
  height: 513px;
  overflow: auto;
  transition: ease all 0.5s;

  @media screen and (min-width: 769px) {
    width: 700px;
  }
`;

export const AddBttn = styled.div`
  margin: 15px 44px 15px 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11px;

  span {
    font-family: var(--font-lexend);
    color: var(--gray-1);
    text-align: center;
    font-size: 16px;
  }

  button {
    width: 30px;
    height: 30px;
  }
`;

export const CardsContainer = styled.div`
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
