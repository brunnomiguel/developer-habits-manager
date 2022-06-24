import styled from "styled-components";

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 250px;
  height: 250px;
  border-radius: 5px none;
  box-shadow: 3px 3px 3px 3px var(--gray-2);

  span {
    color: var(--gray-2);
  }
  p{
    color: #000000;
  }
  hr {
    width: 90%;
    border: 0;
    height: 2px;
    background-image: linear-gradient(
      to right,
      transparent,
      #434334,
      transparent
    );
  }
  div{
    width: 50%;
    text-align: center;
    margin-top: 10px;
  }
`;
