import { useContext } from "react";
import { ModalContext } from "../../providers/Modal";

import { Container } from "./styles";
import { FiX } from "react-icons/fi";

import Button from "../Button";
import ModalAddNewMeta from "../../components/ModalAddNewMeta";

const ModaShowAllGoals = ({ id = "modalShowAllGoals" }) => {
  const { openAddNewGoal, setOpenAddNewGoal, setOpenAllGoals } =
    useContext(ModalContext);

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAllGoals(false);
    }
  };

  return (
    <Container>
      <div className="modal" id={id} onClick={handleOutsideClick}>
        <div className="container">
          <div className="header">
            <span>Metas</span>
            <FiX className="close" onClick={() => setOpenAllGoals(false)} />
          </div>
          <div className="content">
            <p>Crie uma nova meta para este grupo</p>
            <Button small white onClick={() => setOpenAddNewGoal(true)}>
              +
            </Button>
            {openAddNewGoal && <ModalAddNewMeta />}
          </div>
          <div className="subtext">
            <p>Nome da meta</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ModaShowAllGoals;
