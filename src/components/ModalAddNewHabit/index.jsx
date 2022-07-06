import { Container, AddHabitModalHeader, AddHabitModalEdit } from "./style";
import { FiX } from "react-icons/fi";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { ModalContext } from "../../providers/Modal";
import { HabitsContext } from "../../providers/Habits";

import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

const ModalAddNewHabit = ({ id = "addNewHabit" }) => {
  const { setOpenAddNewHabit } = useContext(ModalContext);
  const { addNewHabit } = useContext(HabitsContext);

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenAddNewHabit(false);
    }
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    addNewHabit(data);
    reset();
  };

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <AddHabitModalHeader>
        <p>Novo hábito</p>
        <Button onClick={() => setOpenAddNewHabit(false)}>
          <FiX size={20}/>
        </Button>
      </AddHabitModalHeader>

      <AddHabitModalEdit>
        <div>
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

            <Input
              modal
              placeholder="Digite a categoria"
              register={register}
              name="category"
              label="Categoria: "
              error={errors.category?.message}
              type="text"
            />

            <Input
              modal
              placeholder="Digite a frequência"
              register={register}
              name="frequency"
              label="Frequência: "
              error={errors.category?.message}
              type="text"
            />

            <Select register={register} name="difficulty" />

            <Button white share loginDesk darkSchema>
              Novo hábito
            </Button>
          </form>
        </div>
      </AddHabitModalEdit>
    </Container>
  );
};

export default ModalAddNewHabit;
