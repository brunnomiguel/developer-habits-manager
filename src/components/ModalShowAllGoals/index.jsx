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

import { FiX, FiPlus, FiChevronLeft, FiChevronRight} from "react-icons/fi";

import Button from "../Button";
import ModalAddNewGoal from "../../components/ModalAddNewGoal";
import { GoalsContext } from "../../providers/Goals";
import CardGoal from "../CardGoal";

const ModaShowAllGoals = ({ id = "modalShowAllGoals", capturedGroup }) => {
  const { openAddNewGoal, setOpenAddNewGoal, setOpenAllGoals } =
    useContext(ModalContext);
  const { goals, loadGoals, groupPage, setGroupPage, data } = useContext(GoalsContext);

  useEffect(() => {
    loadGoals(capturedGroup.id);
  }, [capturedGroup.id,groupPage]);

  const nextPage = () => {
    if(data.next !== null){
      console.log(data)
      setGroupPage(groupPage + 1)
    }

  };

  const previusPage = () => {

    if (data.previous !== null && groupPage !== 0){
      console.log(data,"aa")
      setGroupPage(groupPage - 1);
    } 
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
