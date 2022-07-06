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
  padding: 0 10px;

  background-color: var(--green-2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: var(--font-share-tech);
  font-size: 20px;

  svg {
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
  transition: ease all 0.5s;

  background-color: var(--white-1);

  width: 280px;
  height: 550px;

  @media screen and (min-width: 769px) {
    width: 700px;
    height: 560px;
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
  height: 380px;

  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: var(--gray-6);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--gray-2);
    border-radius: 20px;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const PageButtons = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;

  margin: 20px 0;

  button {
    width: 35px;
    height: 30px;
  }

  span {
    width: 35px;
    height: 30px;
    padding: 4px;

    border-radius: 5px;

    background-color: var(--gray-6);
    color: var(--black-1);

    font-family: var(--font-lexend);
    font-size: 16px;
    text-align: center;
  }
`;

export const InputBttnContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  button {
    display: none;
  }

  @media screen and (min-width: 600px) {
    justify-content: space-around;
    height: 37px;

    button {
      display: block;
      height: 37px;
      width: 37px;
    }
  }

  @media screen and (min-width: 769px) {
    span {
      display: block;
      font-family: var(--font-lexend);
      font-size: 18px;
      font-weight: 400;
    }
  }
  `