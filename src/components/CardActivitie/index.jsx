import { Container, CardHeader, DateTime, Buttons } from "./styles";
import { FiEdit, FiDelete } from "react-icons/fi";
import Button from "../Button";

const CardActivitie = () => {
  return (
    <Container>
      <CardHeader>
        <p>Nome da atividade</p>
        <hr />
      </CardHeader>
      <DateTime>
        <p>17/06/2022 às 20:00</p>
      </DateTime>
      <Buttons>
        <Button white>
          {" "}
          <FiEdit size={20} />
        </Button>
        <Button white>
          {" "}
          <FiDelete size={20} />
        </Button>
      </Buttons>
    </Container>
  );
};

export default CardActivitie;
