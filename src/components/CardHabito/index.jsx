import { ContainerGeral } from "./style";
import { toast } from "react-toastify";
import Button from "../Button";
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { ModalContext } from "../../providers/Modal";

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
        <Button onclick={() => setEditHabit(true)}>icone editar</Button>
        <Button onclick={() => deleteHabit(id)}>icone concluir</Button>
      </div>
    </ContainerGeral>
  );
};
export default CardHabito;