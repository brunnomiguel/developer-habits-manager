import styled from "styled-components"

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
        }

        .header {
            background-color: var(--green-2);
            height: 46px;
            width: 280px;
            margin-top: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: var(--font-share-mono);
            font-size: 20px;
            border-radius: 5px;
        }

        .content {
            width: 250px;
            margin-top: 5px;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-around;
        }

        .content p {
            font-family: var(--font-lexend);
            width: 160px;
            font-size: 15px;
            text-align: center;
        }

        span {
            width: 240px;
            height: 46px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        label {
            font-size: 15px;
        }

        input {
            width: 222px;
        }

        .hznlBf {
            margin-bottom: 5px;
        }

        .close {
            background: none;
            font-size: 13px;
            cursor: pointer;
        }

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
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .signals {
            display: flex;
            width: 235px;
            margin-left: 7px;
            justify-content: space-between;
            align-items: center;
            height: 15px;
            font-family: var(--font-share-tech);
            font-size: 15px;
        }
       
        .new {
            width: 240px;
            height: 40px;
            margin-top: 15px;     
            font-size: 15px;
        }

        .fceVSK {
            height: 60px;
        } 

        .subtext p {
            font-family: var(--font-lexend);
            font-size: 18px;
        }
    }
`;