import { ContainerGeral } from "./style";

import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { ModalContext } from "../../providers/Modal";

import Button from "../Button";

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
        <Button onClick={() => setEditHabit(true)}>icone editar</Button>
        <Button onClick={() => deleteHabit(id)}>icone concluir</Button>
      </div>
    </ContainerGeral>
  );
};
export default CardHabito;
