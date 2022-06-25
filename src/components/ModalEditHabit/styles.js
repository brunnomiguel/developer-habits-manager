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
            background-color: #D9D9D9;
            width: 280px;
            height: 200px;
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .header {
            background-color: #5FE1C9;
            height: 46px;
            width: 280px;
            margin-top: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Share Tech';
            font-size: 20px;
        }

        span {
            width: 250px;
            height: 46px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p {
           display: flex;
           width: 280px;
           margin-left: 53px;
           margin-top: 10px;
           margin-bottom: 10px;
           font-family: 'Share Tech Mono';
           font-size: 15px;
        }

        h6 {
            display: flex;
            justify-content: space-between;
        }

        input {
            width: 235px;
        }

        button {
          background: none;
        }

        .signals {
            display: flex;
            width: 222px;
            justify-content: space-between;
            align-items: center;
            height: 15px;
            font-family: 'Share Tech';
            font-size: 15px;
        }

        .update {
            width: 222px;
            height: 40px;
            border: none;
            margin-top: 25px;
            background: #027373;
            color: white;
            font-family: 'Share Tech';
            font-size: 15px;
            border-radius: 5px;
        }
    }
`;
