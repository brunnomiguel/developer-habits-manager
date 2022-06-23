import styled from "styled-components";
import devImage from "../../assets/img/dev.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SignupData = styled.div`
  width: 300px;
  margin: auto;
  h1 {
    font-family: var(--font-share-tech);
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
  }

  h3 {
    font-family: var(--font-lexend);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin-left: 20px;
    margin-top: 11px;
    margin-bottom: 11px;
  }

  form {
    text-align: center;

    button {
      &:hover {
        opacity: 0.7;
        transition: 0.2s ease-out;
      }
    }
  }
  .signIn {
    width: 200px;
    margin: auto;
    text-align: center;
    margin-top: 30px;
    font-family: var(--font-lexend);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    a {
      font-weight: bold;
      color: var(--blue-link);
    }
  }

  @media (min-width: 768px) {
    width: 425px;

    h3 {
      margin-top: 70px;
    }

    .signIn {
      font-size: 20px;
    }
  }
`;

export const ImageContent = styled.div`
  @media (min-width: 1100px) {
      margin: auto;
      background: url(${devImage}) no-repeat center;
      width:700px;
      height: 505px;

`;
