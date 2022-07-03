import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 80px;

  @media screen and (min-width: 769px) {
    flex-direction: row-reverse;

    margin-left: 107px;
    margin-right: 107px;
    margin-top: 100px;
  }
`;

export const ImgContainer = styled.figure`
  img {
    width: 295px;
    height: 221px;
  }

  @media screen and (min-width: 769px) {
    width: 50%;

    img {
      width: 704px;
      height: 551px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 35px;
    text-align: center;
  }

  p {
    display: none;
  }

  button {
    margin-bottom: 23px;
    &:hover {
      opacity: 0.7;
      transition: 0.2s ease-out;
    }
  }

  @media screen and (min-width: 769px) {
    width: 50%;

    p {
      display: block;
      font-family: var(--font-share-tech);
      text-align: justify;
      margin-bottom: 35px;
    }

    button {
      width: 70%;
    }
  }
`;
