import {
  Container,
  ModalHeader,
  AddBttn,
  CardsContainer,
  ModalContent,
  Overlay,
} from "./styles";

import Button from "../Button";
import CardActivity from "../CardActivity";
import AddActivity from "../AddActivity";

import { FiPlus } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../providers/Modal";
import { ActivitiesContext } from "../../providers/Activities";
import ModalEditActivity from "../ModalEditActivity";

const Activities = ({ id = "modalActivities", capturedGroup }) => {
  const {
    setOpenAllActivities,
    openAddNewActivity,
    setOpenAddNewActivity,
    openEditActivity,
  } = useContext(ModalContext);
  const { loadActivities, activities } = useContext(ActivitiesContext);

  const [capturedActivity, setCapturedActivity] = useState({});

  const captureActivity = (activityId) => {
    const verifyActivity = activities.filter(
      (activity) => activity.id === activityId
    );
    setCapturedActivity(...verifyActivity);
  };

  useEffect(() => {
    loadActivities(capturedGroup.id);
  }, [capturedGroup.id]);

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAllActivities(false);
    }
  };

  return (
    <Container>
      <Overlay id={id} onClick={handleOutsideClick} />
      <ModalContent>
        <ModalHeader>
          <p>Atividades</p>
          <button onClick={() => setOpenAllActivities(false)}>
            <FiX size={20} />
          </button>
        </ModalHeader>

        <AddBttn>
          <span>Crie uma atividade</span>
          <Button white onClick={() => setOpenAddNewActivity(true)}>
            <FiPlus size={20} />
          </Button>
        </AddBttn>
        <CardsContainer>
          {activities.map((activity) => {
            return (
              <CardActivity
                key={activity.id}
                activity={activity}
                captureActivity={captureActivity}
                capturedGroupId={capturedGroup.id}
              />
            );
          })}
        </CardsContainer>
      </ModalContent>
      {openAddNewActivity && <AddActivity capturedGroupId={capturedGroup.id} />}
      {openEditActivity && (
        <ModalEditActivity
          activityId={capturedActivity.id}
          capturedGroupId={capturedGroup.id}
        />
      )}
    </Container>
  );
};

export default Activities;
