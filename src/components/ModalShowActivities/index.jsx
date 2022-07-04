import {
  ModalHeader,
  AddBttn,
  CardsContainer,
  ModalContent,
  Overlay,
} from "./styles";

import { FiPlus, FiX } from "react-icons/fi";

import Button from "../Button";
import CardActivity from "../CardActivity";
import ModalAddNewActivity from "../ModalAddNewActivity";
import ModalEditActivity from "../ModalEditActivity";

import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../providers/Modal";
import { ActivitiesContext } from "../../providers/Activities";

const ModalShowActivities = ({ id = "modalActivities", capturedGroup }) => {
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
    <>
      <Overlay id={id} onClick={handleOutsideClick} />
      <ModalContent>
        <ModalHeader>
          <p>Atividades</p>
          <FiX onClick={() => setOpenAllActivities(false)} />
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
      {openAddNewActivity && (
        <ModalAddNewActivity capturedGroupId={capturedGroup.id} />
      )}
      {openEditActivity && (
        <ModalEditActivity
          activityId={capturedActivity.id}
          capturedGroupId={capturedGroup.id}
        />
      )}
    </>
  );
};

export default ModalShowActivities;
