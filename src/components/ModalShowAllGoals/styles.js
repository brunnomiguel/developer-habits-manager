import styled from "styled-components";
export const Container = styled.div`
  .modal {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      background-color: var(--white-1);
      width: 280px;
      height: 350px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: 769px) {
        width: 700px;
      }
      /*
      @media screen and (min-width: 560px) {
        width: 400px;
      }
      @media screen and (min-width: 430px) {
        width: 280px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
      } */
    }

    .header {
      background-color: var(--green-2);
      width: 280px;
      height: 46px;
      color: var(--black-1: #000000);
      margin-top: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--font-share-mono);
      font-size: 20px;
      border-radius: 5px;
      padding: 20px;

      @media screen and (min-width: 769px) {
        width: 700px;
      }
      /*
      @media screen and (min-width: 560px) {
        width: 400px;
      }
      @media screen and (min-width: 430px) {
        width: 280px;
        margin-top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
      } */
    }

    .content {
      width: 280px;
      margin-top: 5px;
      margin-bottom: 15px;
      display: flex;
      justify-content: center;
      align-content: center;

      .content-subtext {
        width: 200px;
        height: 35px;
        display: flex;
        p {
          /* width: 300px; */
          text-align: center;
          font-size: 16px;
          font-family: var(--font-lexend);
        }
        button {
          width: 40px;
          height: 30px;
        }
        /* @media screen and (min-width: 430px) {
          text-align: center;
          width: 260px;
          justify-content: space-between;
          p {
            width: 160px;
          }
          button {
          }
        } */
      }
    }

    span {
      width: 240px;
      height: 46px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    /*label {
      font-size: 15px;
    }
    input {
      width: 222px;
    }
    .hznlBf {
      margin-bottom: 5px;
    } */

    .close {
      background: none;
      font-size: 13px;
      cursor: pointer;
    }
    /*
    .progresso {
      display: flex;
      width: 280px;
      margin-left: 30px;
      margin-top: 10px;
      margin-bottom: 10px;
      font-family: var(--font-share-mono);
      font-size: 15px;
    }
    h6 {
      display: flex;
      justify-content: center;
      justify-content: space-between;
      width: 15px;
    } */

    /*form {
      display: flex;
      flex-direction: column;
      align-items: center;
    } */ 

    /*.signals {
      display: flex;
      width: 235px;
      margin-left: 7px;
      justify-content: space-between;
      align-items: center;
      height: 15px;
      font-family: var(--font-share-tech);
      font-size: 15px;
    } */
    
    .subtext {
      width: 280px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-y: scroll;
      overflow-x: hidden;

      .meta {
        width: 250px;
        height: 155px;
        font-family: var(--font-lexend);
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          text-align: center;
          font-size: 16px;
          margin-top: 15px;
        }

            .button {
            display: flex;
            justify-content: space-around;
            width: 100px;
            }
                button {
                    width: 36px;
                    height: 26px;
                    border-radius: 5px;
                    margin-top: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        @media screen and (min-width: 769px) {
            .subtext {
            flex-direction: row;
            width: 700px;
            }
        }
    
    }
}
  }
`;