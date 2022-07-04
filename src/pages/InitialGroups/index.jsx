import { Container, ImgContainer, Content } from "./style";
import Dev from "../../assets/img/dev.png";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

const InitialGroups = () => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <>
      <Navbar />
      <Container>
        <ImgContainer>
          <img src={Dev} alt="dev" />
        </ImgContainer>
        <Content>
          <h2>Seção de Grupos</h2>
          <p>
            Esta seção é destinada para conexão entre os usuários do{" "}
            <strong>DHM "Developer Habit Manager"</strong>, onde é possível
            criar grupos, procurar os já criados para se inscrever e acompanhar
            as metas e atividades do grupo inscrito.
          </p>
          <Button
            loginMobile
            darkSchema
            share
            white
            onClick={() => handleClick("/YourGroups")}
          >
            Seus grupos
          </Button>
          <Button
            loginMobile
            darkSchema
            share
            white
            onClick={() => handleClick("/AllGroups")}
          >
            Todos os grupos
          </Button>
        </Content>
      </Container>
    </>
  );
};

export default InitialGroups;
