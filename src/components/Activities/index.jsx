import { Container, ModalHeader, AddBttn, CardsContainer } from "./styles";

import Button from "../Button";
import CardActivitie from "../CardActivitie";
import AddActivity from "../AddActivity";

import { FiPlus } from "react-icons/fi";

import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/Modal";
import { ActivitiesContext } from "../../providers/Activities";

const Activities = ({ id = "modalActivities", capturedGroup }) => {
  const { setOpenAllActivities, openAddNewActivity, setOpenAddNewActivity } =
    useContext(ModalContext);
  const { loadActivities, activities } = useContext(ActivitiesContext);

  useEffect(() => {
    loadActivities(capturedGroup.id);
  }, [capturedGroup.id]);

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
        {activities.map((activity) => {
          return <CardActivitie key={activity.id} activity={activity} />;
        })}
      </CardsContainer>
      {openAddNewActivity && <AddActivity capturedGroupId={capturedGroup.id} />}
    </Container>
  );
};

export default Activities;
