import { Container } from "./style";

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
        <Button
          Button
          loginDesk
          darkSchema
          white
          share
          onClick={() => handleClick("/YourGroups")}
        >
          Seus grupos
        </Button>
        <Button
          loginDesk
          darkSchema
          white
          share
          onClick={() => handleClick("/AllGroups")}
        >
          Todos os grupos
        </Button>
      </Container>
    </>
  );
};

export default InitialGroups;
