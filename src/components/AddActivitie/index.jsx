import Button from "../Button";
import Input from "../Input";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, AddHabitModalHeader, AddHabitModalEdit } from "./styles";

const AddActivitie = () => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    dateTime: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // const handleActivitie = (data) => {

  // }

  return (
    <Container>
      <AddHabitModalHeader>
        <p>Nova Atividade</p>
        <button>X</button>
      </AddHabitModalHeader>

      <AddHabitModalEdit>
        <div className="adjustment">
          <form>
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

export default AddActivitie;
