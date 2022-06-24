import { ModalForm, ModalHeader, Modal } from "./style";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import Button from "../Button";
import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ModalAdd = ({ SetModal }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Email obrigatório"),
    category: yup.string().required("Senha obrigatória"),
    difficulty: yup.string().required("Senha obrigatória"),
    frequency: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const AddHabit = (data) => {
    // ver qual nome do local que o token ficou salvo
    const token = JSON.parse(localStorage.getItem("@gestao-habitos:token"));
    api
      .post("/habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        SetModal(false);
        toast.success("Hábito cadastrado com sucesso");
      })
      .catch((err) => toast.error("Falha ao cadastrar o hábito"));
  };

  const handleFechaModal = () => {
    SetModal(false);
  };

  return (
    <Modal>
      <ModalHeader>
        <h2>Novo hábito</h2>
        <Button onclick={() => handleFechaModal()} >X</Button>
      </ModalHeader>
      <ModalForm onSubmit={handleSubmit(AddHabit)}>
        <Input
          register={register}
          label="Título"
          name="title"
          placeholder="Nome do hábito"
          error={"inserir error"}
        ></Input>
        <Input
          register={register}
          label="Categoria"
          name="category"
          placeholder="Informe a categoria"
          error={"inserir error"}
        ></Input>
        <Input
          register={register}
          label="Dificuldade"
          name="difficulty"
          placeholder="Informe a dificuldade"
          error={"inserir error"}
        ></Input>
        <Input
          register={register}
          label="Frequência"
          name="frequency"
          placeholder="Frequência da atividade"
          error={"inserir error"}
        ></Input>

        <Button type="submit" children="Novo hábito"></Button>
      </ModalForm>
    </Modal>
  );
};

export default ModalAdd;
