import { Container, CardHeader, DateTime, Buttons } from "./styles";
import { FiEdit, FiDelete } from "react-icons/fi";
import Button from "../Button";
import { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import { ModalContext } from "../../providers/Modal";

const CardActivitie = ({ activity, capturedGroupId, captureActivity }) => {
  const { id, title, realization_time } = activity;
  const { deleteActivity } = useContext(ActivitiesContext);
  const { setOpenEditActivity } = useContext(ModalContext);

  const handleClickFinish = () => {
    deleteActivity(id, capturedGroupId);
  };

  return (
    <Container>
      <CardHeader>
        <p>{title}</p>
        <hr />
      </CardHeader>
      <DateTime>
        <p>{realization_time}</p>
      </DateTime>
      <Buttons>
        <Button
          white
          onClick={() => {
            setOpenEditActivity(true);
            captureActivity(id);
          }}
        >
          <FiEdit size={20} />
        </Button>
        <Button white onClick={() => handleClickFinish()}>
          <FiDelete size={20} />
        </Button>
      </Buttons>
    </Container>
  );
};

export default CardActivitie;