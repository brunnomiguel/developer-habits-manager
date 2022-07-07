import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/Modal";

import {
  Overlay,
  ModalHeader,
  ModalContent,
  AddBttn,
  CardsContainer,
  PageButtons,
} from "./styles";

import { FiX, FiPlus, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Button from "../Button";
import ModalAddNewGoal from "../../components/ModalAddNewGoal";
import { GoalsContext } from "../../providers/Goals";
import CardGoal from "../CardGoal";

const ModaShowAllGoals = ({ id = "modalShowAllGoals", capturedGroup }) => {
  const { openAddNewGoal, setOpenAddNewGoal, setOpenAllGoals } =
    useContext(ModalContext);

  const { goals, loadGoals, goalPage, setGoalPage, data } =
    useContext(GoalsContext);

  const nextPage = () => {
    if (data.next !== null) {
      setGoalPage(goalPage + 1);
    }
  };

  const previusPage = () => {

    if (data.previous !== null && goalPage !== 0) {
      setGoalPage(goalPage - 1);
    }
  };

  useEffect(() => {
    loadGoals(capturedGroup.id);
   
  }, [capturedGroup.id, goalPage]);

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
          <span>Crie uma meta</span>
          <abbr title="Adicionar meta">
            <Button small white onClick={() => setOpenAddNewGoal(true)}>
              <FiPlus size={20} />
            </Button>
          </abbr>
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
        <PageButtons>
          <Button white onClick={() => previusPage()}>
            <FiChevronLeft size={20} />
          </Button>
          <span>{goalPage}</span>
          <Button white onClick={() => nextPage()}>
            <FiChevronRight size={20} />
          </Button>
        </PageButtons>
      </ModalContent>
    </>
  );
};

export default ModaShowAllGoals;
