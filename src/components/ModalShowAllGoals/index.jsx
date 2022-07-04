import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/Modal";

import {
  Overlay,
  ModalHeader,
  ModalContent,
  AddBttn,
  CardsContainer,
} from "./styles";

import { FiX, FiPlus } from "react-icons/fi";

import Button from "../Button";
import ModalAddNewGoal from "../../components/ModalAddNewGoal";
import { GoalsContext } from "../../providers/Goals";
import CardGoal from "../CardGoal";

const ModaShowAllGoals = ({ id = "modalShowAllGoals", capturedGroup }) => {
  const { openAddNewGoal, setOpenAddNewGoal, setOpenAllGoals } =
    useContext(ModalContext);
  const { goals, loadGoals } = useContext(GoalsContext);

  useEffect(() => {
    loadGoals(capturedGroup.id);
  }, [capturedGroup.id]);

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAllGoals(false);
    }
  };

  return (
    <>
      <Overlay id={id} onClick={handleOutsideClick} />
      <ModalContent>
        <ModalHeader>
          <p>Metas</p>
          <FiX onClick={() => setOpenAllGoals(false)} />
        </ModalHeader>
        <AddBttn>
          <span>Crie uma nova meta para este grupo</span>
          <Button small white onClick={() => setOpenAddNewGoal(true)}>
            <FiPlus size={20} />
          </Button>
          {openAddNewGoal && (
            <ModalAddNewGoal capturedGroupId={capturedGroup.id} />
          )}
        </AddBttn>

        <CardsContainer>
          {goals.map((goal) => {
            return (
              <CardGoal
                key={goal.id}
                goal={goal}
                capturedGroupId={capturedGroup.id}
              />
            );
          })}
        </CardsContainer>
      </ModalContent>
    </>
  );
};

export default ModaShowAllGoals;
