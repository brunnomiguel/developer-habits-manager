import { ContainerGeral } from "./style";
import { toast } from "react-toastify";
import Button from "../Button";

const CardHabito = ({
  // id,
  // title,
  // category,
  editFunction,
  habit,
  concludeFunction,
}) => {
  const { id, title, category } = habit;

  const toastFinished = (concludeFunction) => {
    // ao clicar no concluir, executa a função do botão concluir recebida por props
    // e também executa o toast sucess para avisar que a atividade foi concluida
    concludeFunction();
    toast.success("Hábito deletado");
  };

  return (
    <ContainerGeral>
      <p>{title}</p>
      <hr></hr>
      <span>{category}</span>
      <div>
        <Button onclick={() => editFunction()}>icone editar</Button>
        <Button onclick={() => toastFinished()}>icone concluir</Button>
      </div>
    </ContainerGeral>
  );
};
export default CardHabito;
// lembrete para o reges de senha, adicionar o ponto e virgula como caractere especial
