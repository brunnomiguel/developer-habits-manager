import { Container, ModalHeader, AddBttn, CardsContainer } from "./styles";

import Button from "../Button";
import CardActivitie from "../CardActivitie";

import { FiPlus } from "react-icons/fi";

const Activities = ({ handleActivities }) => {
  return (
    <Container>
      <ModalHeader>
        <p>Atividades</p>
        <button onClick={handleActivities}>X</button>
      </ModalHeader>

      <AddBttn>
        <span>Crie uma atividade</span>
        <Button white>
          <FiPlus size={20} />
        </Button>
      </AddBttn>
      <CardsContainer>
        <CardActivitie />
        <CardActivitie />
        <CardActivitie />
        <CardActivitie />
      </CardsContainer>
    </Container>
  );
};

export default Activities;
