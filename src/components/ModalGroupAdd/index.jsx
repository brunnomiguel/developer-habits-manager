import { Container, AddGroupModalHeader, AddGroupModalEdit } from "./style";
import { FiX } from "react-icons/fi";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { ModalContext } from "../../providers/Modal";
import { HabitsContext } from "../../providers/Habits";

import Input from "../Input";
import Button from "../Button";

const ModalGroupAddEdit = ({ id = "addNewGroup" }) => {
  const { setOpenAddNewGroup } = useContext(ModalContext);
  const { createNewGroup } = useContext(HabitsContext);

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAddNewGroup(false);
    }
  };

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    createNewGroup(data);
    reset();
  };

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <AddGroupModalHeader>
        <p>Novo Grupo</p>
        <button onClick={() => setOpenAddNewGroup(false)}>
          <FiX />
        </button>
      </AddGroupModalHeader>

      <AddGroupModalEdit>
        <div>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              modal
              placeholder="Digite o Nome do grupo"
              register={register}
              name="name"
              label="Nome do grupo: "
              error={errors.name?.message}
              type="text"
            />

            <Input
              modal
              placeholder="Digite uma descrição"
              register={register}
              name="description"
              label="Descrição: "
              error={errors.description?.message}
              type="text"
            />

            <Input
              modal
              placeholder="Digite uma categoria"
              register={register}
              name="category"
              label="Categoria: "
              error={errors.category?.message}
              type="text"
            />

            <Button white share loginDesk>
              Novo Grupo
            </Button>
          </form>
        </div>
      </AddGroupModalEdit>
    </Container>
  );
};

export default ModalGroupAddEdit;