import styled from "styled-components"

export const Container = styled.div`
    .modal {
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;

        .container-modal {
            background-color: var(--gray-4);
            width: 280px;
            height: fit-content;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .header-modal {
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

        span {
            width: 240px;
            height: 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        input {
            width: 222px;
        }

        .kVWMBm {
            height: 60px;
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

        .eDCGVF {
            height: 60px;
        } 
       
        .ghNgCB {
            border-radius: 5px;
        }

        .hzXxP {
            margin-bottom: 5px;
        }

        .new {
            width: 240px;
            height: 40px;
            margin-top: 15px;     
            font-size: 15px;
            margin-bottom: 10px;
        }
    }
`;
