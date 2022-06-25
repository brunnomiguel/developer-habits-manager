import { ContainerGeral } from "./style";

import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { ModalContext } from "../../providers/Modal";

import ModalEditHabit from "../ModalEditHabit";
import Button from "../Button";

import {
  FiEdit, FiDelete
} from "react-icons/fi";

const CardHabito = ({ habit }) => {
  const { id, title, category, difficulty, how_much_achieved } = habit;

  const { deleteHabit } = useContext(HabitsContext);
  const { editHabit, setEditHabit } = useContext(ModalContext);

  return (
    <ContainerGeral>
      <p>{title}</p>
      <hr></hr>
      <span>{category}</span>
      <span>Quanto Alcançou - {how_much_achieved}</span>
      <div>
        <Button white ativMetaDesk onClick={() => setEditHabit(true)}><FiEdit size={20} /></Button>
        <span></span>
        <Button white ativMetaDesk onClick={() => deleteHabit(id)}><FiDelete size={20} /></Button>
        {editHabit && <ModalEditHabit habitId={id} />}
      </div>
    </ContainerGeral>
  );
};
export default CardHabito;