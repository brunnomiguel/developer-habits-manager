import Button from "../../components/Button";

import Navbar from "../../components/Navbar";
import { Container } from "./style";

import { useHistory } from "react-router-dom";
const InitialGroupsPage = () => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Button
          Button
          loginDesk
          white
          share
          onClick={() => handleClick("/seusgrupos")}
        >
          Seus grupos
        </Button>
        <Button
          loginDesk
          white
          share
          onClick={() => handleClick("/todosgrupos")}
        >
          Todos os grupos
        </Button>
        <Button
          loginDesk
          white
          share
          onClick={() => handleClick("/gruposfazparte")}
        >
          Grupos que você faz parte
        </Button>
      </Container>
    </>
  );
};

export default InitialGroupsPage;
