import { ContainerGeral } from "./style";
import { toast } from "react-toastify";
import Button from "../Button";
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { ModalContext } from "../../providers/Modal";

import {
  FiEdit, FiDelete
} from "react-icons/fi";

const CardHabito = ({ habit }) => {
  const { id, title, category, difficulty, how_much_achieved } = habit;

  const { deleteHabit } = useContext(HabitsContext);
  const { setEditHabit } = useContext(ModalContext);

  return (
    <ContainerGeral>
      <p>{title}</p>
      <hr></hr>
      <span>{category}</span>
      <div>
        <Button white ativMetaDesk onclick={() => setEditHabit(true)}><FiEdit size={20} /></Button>
        <span></span>
        <Button white ativMetaDesk onclick={() => deleteHabit(id)}><FiDelete size={20} /></Button>
      </div>
    </ContainerGeral>
  );
};
export default CardHabito;