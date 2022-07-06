import { Container, CardHeader, DateTime, Buttons } from "./styles";
import { FiEdit, FiDelete } from "react-icons/fi";

import { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import { ModalContext } from "../../providers/Modal";

import Button from "../Button";

const CardActivity = ({ activity, capturedGroupId, captureActivity }) => {
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
        <abbr title="Editar atividade">
          <Button
            white
            onClick={() => {
              setOpenEditActivity(true);
              captureActivity(id);
            }}
          >
            <FiEdit size={20} />
          </Button>
        </abbr>
        <abbr title="Deletar atividade">
          <Button white onClick={() => handleClickFinish()}>
            <FiDelete size={20} />
          </Button>
        </abbr>
      </Buttons>
    </Container>
  );
};

export default CardActivity;
