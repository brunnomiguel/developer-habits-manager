import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/Modal";
import { GoalsContext } from "../../providers/Goals";

import {
  Overlay,
  ModalHeader,
  ModalContent,
  AddBttn,
  CardsContainer,
  PageButtons,
} from "./styles";

import { FiX, FiPlus, FiChevronLeft, FiChevronRight} from "react-icons/fi";

import Button from "../Button";
import ModalAddNewGoal from "../../components/ModalAddNewGoal";
import CardGoal from "../CardGoal";

const ModaShowAllGoals = ({ id = "modalShowAllGoals", capturedGroup }) => {
  const { openAddNewGoal, setOpenAddNewGoal, setOpenAllGoals } =
    useContext(ModalContext);

  const { goals, loadGoals, groupPage, setGroupPage, total } =
    useContext(GoalsContext);

  useEffect(() => {
    loadGoals(capturedGroup.id);
  }, [capturedGroup.id, goals]);

  const nextPage = () => {
    const totalPage = Math.ceil(total / 15);
    if (groupPage < totalPage) return setGroupPage(groupPage + 1);
  };

  const previusPage = () => {
    if (groupPage > 1) return setGroupPage(groupPage - 1);
  };

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
          <FiX size={20} onClick={() => setOpenAllGoals(false)} />
        </ModalHeader>
        <AddBttn>
          <span>Crie uma nova meta</span>
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
          <span>{groupPage}</span>
          <Button white onClick={() => nextPage()}>
            <FiChevronRight size={20} />
          </Button>
        </PageButtons>
      </ModalContent>
    </>
  );
};

export default ModaShowAllGoals;
