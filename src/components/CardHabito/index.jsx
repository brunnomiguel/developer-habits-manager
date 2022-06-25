import { ContainerGeral } from "./style";
import { toast } from "react-toastify";
import Button from "../Button";
import { useContext } from "react";
import { HabitsContext } from "../../providers/Habits";

const CardHabito = ({
  id,
  title,
  category,
  editFunction,
  concludeFunction,
}) => {
  const { updateHabit, deleteHabit } = useContext(HabitsContext);

  // const toastFinished = (concludeFunction) => {
  //   // ao clicar no concluir, executa a função do botão concluir recebida por props
  //   // e também executa o toast sucess para avisar que a atividade foi concluida
  //   deleteHabit();
  //   toast.success("Hábito deletado");
  // };

  return (
    <ContainerGeral>
      <p>{id.title}</p>
      <hr></hr>
      <span>{id.category}</span>
      <div>
        <Button onclick={() => updateHabit()}>icone editar</Button>
        <Button onclick={() => deleteHabit()}>icone concluir</Button>
      </div>
    </ContainerGeral>
  );
};
export default CardHabito;
// lembrete para o regex de senha, adicionar o ponto e virgula como caractere especial
