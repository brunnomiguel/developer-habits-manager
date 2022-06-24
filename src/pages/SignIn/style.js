import styled, { keyframes } from "styled-components";
import LoginImage from "../../assets/img/dev.png";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 550px;
`;
export const ContentAnimation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1.2s;

  h1 {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: normal;
  }

  form {
    margin: 20px 0;
    width: 280px;
    text-align: center;

    h2 {
      font-size: 18px;
      font-weight: bold;
      text-align: left;
    }
  }

  p {
    margin-top: 30px;
    font-size: 16px;
    font-family: var(--font-lexend);

    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      font-weight: bold;
      color: var(--blue-link);
    }
  }

  button {
    color: #ffffff;
  }

  @media (min-width: 768px) {
    form {
      width: 410px;

      h2 {
        font-size: 26px;
      }
    }
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 20px;
    }
    button {
      font-size: 20px;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
export const BackgroundImage = styled.div`
  @media (min-width: 1100px) {
    margin: 0;
      background: url(${LoginImage}) no-repeat center;
      width:700px;
      /* height: 505px; */
  }
`;
