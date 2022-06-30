import { Container, ModalHeader, AddBttn, CardsContainer } from "./styles";

import Button from "../Button";
import CardActivitie from "../CardActivitie";
import AddActivity from "../AddActivity";

import { FiPlus } from "react-icons/fi";

import { useContext } from "react";
import { ModalContext } from "../../providers/Modal";

const Activities = ({ id = "modalActivities" }) => {
  const { setOpenAllActivities, openAddNewActivity, setOpenAddNewActivity } =
    useContext(ModalContext);

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAllActivities(false);
    }
  };

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <ModalHeader>
        <p>Atividades</p>
        <button onClick={() => setOpenAllActivities(false)}>X</button>
      </ModalHeader>

      <AddBttn>
        <span>Crie uma atividade</span>
        <Button white onClick={() => setOpenAddNewActivity(true)}>
          <FiPlus size={20} />
        </Button>
      </AddBttn>
      <CardsContainer>
        <CardActivitie />
        <CardActivitie />
        <CardActivitie />
        <CardActivitie />
      </CardsContainer>
      {openAddNewActivity && <AddActivity />}
    </Container>
  );
};

export default Activities;
