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
      height: 260px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (min-width: 769px) {
        width: 700px;
        height: 500px;

        .subtext {
          flex-wrap: wrap;
          justify-content: space-around;
        }
      }
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

      span {
        width: 240px;
        height: 46px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .close {
        background: none;
        font-size: 13px;
        cursor: pointer;
      }
  
      @media screen and (min-width: 769px) {
        font-size: 30px;
        width: 700px;

        .close {
          width: 22px;
          height: 23px;
        }
      }  
  
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
          text-align: center;
          font-size: 16px;
          font-family: var(--font-lexend);
        }

        button {
          width: 40px;
          height: 30px;
        }

        @media screen and (min-width: 769px) {
          width: 700px;

          p {
            width: 300px;
          }
        }
  
      }

    }

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
        height:230px;
        font-family: var(--font-lexend);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;

        .bpsTbR {
          width: 300px;
          height: 220px;
          margin: 10px 25px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .iDQewz {
          margin-top: 20px;
        }

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

              p {
                whidth: 200px;
              }

              .meta {
                margin: 0px;
              }

            }
        }
    
    }
}
  }
`;
