import { Container } from "./style";
import { FiEdit, FiDelete } from "react-icons/fi";

import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";

import Button from "../Button";
import { ModalContext } from "../../providers/Modal";

const CardHabit = ({ habit, captureHabit }) => {
  const { id, title, category, difficulty, how_much_achieved } = habit;

  const { deleteHabit } = useContext(HabitsContext);
  const { setOpenEditHabit } = useContext(ModalContext);

  return (
    <Container>
      <p>{title}</p>
      <hr></hr>
      <span>{category}</span>
      <span>{difficulty}</span>
      <span>Hábitos alcançados - {how_much_achieved}</span>
      <div>
        <Button
          white
          ativMetaDesk
          onClick={() => {
            setOpenEditHabit(true);
            captureHabit(id);
          }}
        >
          <FiEdit size={20} />
        </Button>

        <Button white ativMetaDesk onClick={() => deleteHabit(id)}>
          <FiDelete size={20} />
        </Button>
      </div>
    </Container>
  );
};
export default CardHabit;
