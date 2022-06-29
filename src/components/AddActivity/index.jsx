import Button from "../Button";
import Input from "../Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { ActivitiesContext } from "../../providers/Activities";
import { ModalContext } from "../../providers/Modal";
import { Container, AddHabitModalHeader, AddHabitModalEdit } from "./styles";

const AddActivity = ({ id = "addActivity" }) => {
  const { setOpenAddNewActivity } = useContext(ModalContext);
  const { addNewActivity } = useContext(ActivitiesContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    dateTime: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // const handleActivity = (data) => {
  //  addNewActivity(data, groupId);
  //  reset();
  // };

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAddNewActivity(false);
    }
  };

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <AddHabitModalHeader>
        <p>Nova Atividade</p>
        <button onClick={setOpenAddNewActivity(false)}>X</button>
      </AddHabitModalHeader>

      <AddHabitModalEdit>
        <div className="adjustment">
          <form onSubmit={handleSubmit(handleActivity)}>
            <Input
              modal
              placeholder="Digite o título"
              register={register}
              name="title"
              label="Título:"
              error={errors.title?.message}
            />
            <Input
              modal
              placeholder="Digite data e horário"
              register={register}
              name="dateTime"
              label="Título:"
              error={errors.dateTime?.message}
            />

            <Button white share loginDesk>
              Nova Atividade
            </Button>
          </form>
        </div>
      </AddHabitModalEdit>
    </Container>
  );
};

export default AddActivity;
