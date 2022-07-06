import { Container, ImgContainer, Content } from "./styles";

import { useHistory } from "react-router-dom";

import Dev from "../../assets/img/dev.png";
import Button from "../../components/Button";

const LandingPage = () => {
  const history = useHistory();

  const handleNavigate = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <ImgContainer>
        <img src={Dev} alt="dev" />
      </ImgContainer>
      <Content>
        <h2>Developer Habits Manager</h2>
        <p>
          O <strong>Developer Habits Manager (DHM)</strong> ajuda você a organizar seus estudos
          através da criação de hábitos e grupos. Inscreva-se na plataforma ou
          faça seu login para gerenciar sua evolução nas linguagens e tópicos de
          estudo. Crie também atividades e metas nos seus grupos e as matenha
          atualizadas de acordo com seu progresso.
        </p>
        <Button
          loginMobile
          darkSchema
          share
          white
          onClick={() => handleNavigate("/SignIn")}
        >
          Login
        </Button>
        <Button
          loginMobile
          darkSchema
          share
          white
          onClick={() => handleNavigate("/SignUp")}
        >
          Cadastre-se
        </Button>
      </Content>
    </Container>
  );
};

export default LandingPage;
