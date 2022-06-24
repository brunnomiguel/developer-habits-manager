import { ContainerGeral } from "./style";
import { toast } from "react-toastify";
import Button from "../Button";

const CardHabito = ({
  date,
  title,
  category,
  editFunction,
  concludeFunction,
}) => {

  const toastFinished = (concludeFunction) => {
    // ao clicar no concluir, executa a função do botão concluir recebida por props
    // e também executa o toast sucess para avisar que a atividade foi concluida
    concludeFunction();
    toast.success("Atividade concluida");
  }

  return (
    <ContainerGeral>
      <span>{date}</span>
      <hr></hr>
      <p>{title}</p>
      <span>{category}</span>
      <div>
        <Button onclick={()=> editFunction()}>icone editar</Button>
        <Button onclick={()=> toastFinished()} >icone concluir</Button>
      </div>
    </ContainerGeral>
  );
};
export default CardHabito;