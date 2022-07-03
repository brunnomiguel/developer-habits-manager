import Button from "../Button";
import Input from "../Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import { ModalContext } from "../../providers/Modal";
import { Container, AddHabitModalHeader, AddHabitModalEdit } from "./styles";

const AddActivity = ({ id = "addActivity", capturedGroupId }) => {
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
      <AddHabitModalHeader>
        <p>Nova Atividade</p>
        <button onClick={() => setOpenAddNewActivity(false)}>X</button>
      </AddHabitModalHeader>

      <AddHabitModalEdit>
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
              label="Título:"
              error={errors.realization_time?.message}
            />

            <Button white share darkSchema loginDesk>
              Nova Atividade
            </Button>
          </form>
        </div>
      </AddHabitModalEdit>
    </Container>
  );
};

export default AddActivity;
