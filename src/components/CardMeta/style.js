import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: auto;
  background-color: var(--white-1);
  padding: 10px 10px;
  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 2px 2px 4px var(--gray-3);
  border: 1px solid var(--gray-3);
  @media (min-width: 720px){
    width: 300px;
    height: 155px;
    margin: 10px 25px;
  }
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--gray-3);
  margin-bottom: 15px;
  h3 {
    text-align: center;
    font-size: 16px;
    font-family: var(--font-lexend);
    word-wrap:break-word;
  }

  @media (min-width: 720px){
    margin: 10px 0;
  }
`;

export const Content = styled.div`
  width: 100% ;
  margin-bottom: 15px;
  p {
    font-size: 16px;
    font-family: var(--font-lexend);
    text-align: center;
  }

`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  button {
    width: 50px;
    
  }

  button + button {
    margin-left: -100px;

    @media (min-width: 720px){
        margin-left: -120px;
}
  }
`;
