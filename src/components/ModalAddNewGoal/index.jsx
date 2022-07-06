import { useContext } from "react";

import { Container, ModalHeader, ModalEdit } from "./styles";
import { FiX } from "react-icons/fi";

import { GoalsContext } from "../../providers/Goals";
import { ModalContext } from "../../providers/Modal";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

const ModalAddNewGoal = ({ id = "modalAddNewMeta", capturedGroupId }) => {
  const { setOpenAddNewGoal } = useContext(ModalContext);
  const { addNewGoal } = useContext(GoalsContext);

  const editSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(editSchema) });

  const onSubmitFunction = (data) => {
    addNewGoal(data, capturedGroupId);
    reset();
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAddNewGoal(false);
    }
  };

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <ModalHeader>
        <p>Nova meta</p>
        <abbr title="Adicionar meta">
          <Button onClick={() => setOpenAddNewGoal(false)}>
            <FiX size={20} />
          </Button>
        </abbr>
      </ModalHeader>
      <ModalEdit>
        <div className="adjustment">
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              modal
              placeholder="Digite o título"
              register={register}
              name="title"
              label="Título: "
              error={errors.title?.message}
              type="text"
            />

            <Select register={register} name="difficulty" />
            <Button white share darkSchema loginDesk type="submit">
              Nova meta
            </Button>
          </form>
        </div>
      </ModalEdit>
    </Container>
  );
};

export default ModalAddNewGoal;
