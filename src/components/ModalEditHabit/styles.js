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
            background-color: var(--gray-4);
            width: 280px;
            height: 200px;
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

        span {
            width: 250px;
            height: 46px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .close {
            background: none;
            font-size: 13px;
            cursor: pointer;
        }

        p {
           display: flex;
           width: 280px;
           margin-left: 53px;
           margin-top: 10px;
           margin-bottom: 10px;
           font-family: var(--font-share-mono);
           font-size: 15px;
        }

        h6 {
            display: flex;
            justify-content: space-between;
            width: 10px;
        }

        input {
            width: 230px;
        }
    
        form {
            display: flex;
            flex-direction: column;
            align-items: center;

            .kJFvbR {
                height: 30px;
                margin-top: 5px;

                div {
                    width: 0px;
                }
            }

            .kVWMBm {
                height: 30px;
                margin-top: 0px;
            }
        }

        .signals {
            display: flex;
            width: 222px;
            justify-content: space-between;
            align-items: center;
            height: 15px;
            font-family: var(--font-share-tech);
            font-size: 15px;
        }
       
        .update {
            width: 240px;
            height: 40px;
            margin-top: 15px;     
            font-size: 15px;
        }
    }
`;
