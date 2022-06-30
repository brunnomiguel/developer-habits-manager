import { Container, CardHeader, DateTime, Buttons } from "./styles";
import { FiEdit, FiDelete } from "react-icons/fi";
import Button from "../Button";

const CardActivitie = ({ activity }) => {
  const { title, realization_time } = activity;

  return (
    <Container>
      <CardHeader>
        <p>{title}</p>
        <hr />
      </CardHeader>
      <DateTime>
        <p>{realization_time}</p>
      </DateTime>
      <Buttons>
        <Button white>
          <FiEdit size={20} />
        </Button>
        <Button white>
          <FiDelete size={20} />
        </Button>
      </Buttons>
    </Container>
  );
};

export default CardActivitie;
