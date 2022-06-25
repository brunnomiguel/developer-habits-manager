import { ContainerGeral } from "./style";

import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { ModalContext } from "../../providers/Modal";

import ModalEditHabit from "../ModalEditHabit";

import Button from "../Button";

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
        <Button onClick={() => setEditHabit(true)}>icone editar</Button>
        <Button onClick={() => deleteHabit(id)}>icone concluir</Button>
        {editHabit && <ModalEditHabit habitId={id} />}
      </div>
    </ContainerGeral>
  );
};
export default CardHabito;
