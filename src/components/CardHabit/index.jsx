import { Container } from "./style";
import { FiEdit, FiDelete } from "react-icons/fi";

import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { ModalContext } from "../../providers/Modal";

import Button from "../Button";

const CardHabit = ({ habit, captureHabit }) => {
  const { id, title, category, difficulty, how_much_achieved } = habit;

  const { deleteHabit } = useContext(HabitsContext);
  const { setOpenEditHabit } = useContext(ModalContext);

  return (
    <Container>
      <h3>{title}</h3>
      <hr></hr>
      <p>
        Categoria: <span>{category}</span>
      </p>
      <p>
        Nível: <span>{difficulty}</span>
      </p>
      <p>
        Alcançado: <span>{how_much_achieved}</span>
      </p>
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
