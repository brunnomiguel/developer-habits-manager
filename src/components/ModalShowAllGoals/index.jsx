import { useContext, useEffect } from "react";
import { ModalContext } from "../../providers/Modal";

import { Container } from "./styles";
import { FiX, FiEdit, FiDelete } from "react-icons/fi";

import Button from "../Button";
import ModalAddNewMeta from "../../components/ModalAddNewMeta";
import { GoalsContext } from "../../providers/Goals";

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
    <Container>
      <div className="modal" id={id} onClick={handleOutsideClick}>
        <div className="container">
          <div className="header">
            <span>Metas</span>
            <FiX className="close" onClick={() => setOpenAllGoals(false)} />
          </div>
          <div className="content">
            <div className="content-subtext">
              <p>Crie uma nova meta para este grupo</p>
              <Button small white onClick={() => setOpenAddNewGoal(true)}>
                +
              </Button>
              {openAddNewGoal && (
                <ModalAddNewMeta capturedGroupId={capturedGroup.id} />
              )}
            </div>
          </div>
          <div className="subtext">
            {goals.map((goal) => {
              return (
                <div className="meta" key={goal.id}>
                  <p>{goal.title}</p>
                  <p>{goal.difficulty}</p>
                  <div className="button">
                    <Button white>
                      {" "}
                      <FiEdit size={20} />
                    </Button>
                    <Button white>
                      {" "}
                      <FiDelete size={20} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ModaShowAllGoals;
