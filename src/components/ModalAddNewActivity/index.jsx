import { Container, ModalHeader, ModalEdit } from "./styles";
import { FiX } from "react-icons/fi";

import { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import { ModalContext } from "../../providers/Modal";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import Input from "../Input";

const ModalAddNewActivity = ({ id = "addActivity", capturedGroupId }) => {
  const { setOpenAddNewActivity } = useContext(ModalContext);
  const { addNewActivity } = useContext(ActivitiesContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleActivity = (data) => {
    addNewActivity(data, capturedGroupId);
    reset();
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAddNewActivity(false);
    }
  };

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <ModalHeader>
        <p>Nova Atividade</p>
        <Button onClick={() => setOpenAddNewActivity(false)}>
          <FiX size={20} />
        </Button>
      </ModalHeader>

      <ModalEdit>
        <div className="adjustment">
          <form onSubmit={handleSubmit(handleActivity)}>
            <Input
              type="text"
              modal
              placeholder="Digite o título"
              register={register}
              name="title"
              label="Título:"
              error={errors.title?.message}
            />
            <Input
              type="date"
              modal
              placeholder="Digite a data"
              register={register}
              name="realization_time"
              label="Data:"
              error={errors.realization_time?.message}
            />

            <Button white share darkSchema loginDesk>
              Nova Atividade
            </Button>
          </form>
        </div>
      </ModalEdit>
    </Container>
  );
};

export default ModalAddNewActivity;
