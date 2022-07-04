import {
  ModalHeader,
  AddBttn,
  CardsContainer,
  ModalContent,
  Overlay,
} from "./styles";

<<<<<<< HEAD:src/components/Activities/index.jsx
import Button from "../Button";
import CardActivity from "../CardActivity";
import AddActivity from "../AddActivity";

import { FiPlus } from "react-icons/fi";
import { FiX } from "react-icons/fi";
=======
import { FiPlus, FiX } from "react-icons/fi";

import Button from "../Button";
import CardActivity from "../CardActivity";
import ModalAddNewActivity from "../ModalAddNewActivity";
import ModalEditActivity from "../ModalEditActivity";
>>>>>>> 7b85e2064b40eb6996081a0eefe78debd07db6cf:src/components/ModalShowActivities/index.jsx

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
<<<<<<< HEAD:src/components/Activities/index.jsx
          <button onClick={() => setOpenAllActivities(false)}>
            <FiX size={20} />
          </button>
=======
          <FiX onClick={() => setOpenAllActivities(false)} />
>>>>>>> 7b85e2064b40eb6996081a0eefe78debd07db6cf:src/components/ModalShowActivities/index.jsx
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
