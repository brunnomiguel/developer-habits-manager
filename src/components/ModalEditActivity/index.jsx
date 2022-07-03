import Button from "../Button";
import Input from "../Input";

import { Container, Content, EditActivitieModalHeader } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ModalContext } from "../../providers/Modal";
import { ActivitiesContext } from "../../providers/Activities";

const ModalEditActivity = ({
  id = "addActivity",
  activityId,
  capturedGroupId,
}) => {
  const { setOpenEditActivity } = useContext(ModalContext);
  const { updateActivity } = useContext(ActivitiesContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleClickUpdate = (data) => {
    updateActivity(data, activityId, capturedGroupId);
    reset();
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenEditActivity(false);
    }
  };
  return (
    <Container id={id} onClick={handleOutsideClick}>
      <EditActivitieModalHeader>
        <p>Editar atividade</p>
        <button onClick={() => setOpenEditActivity(false)}>X</button>
      </EditActivitieModalHeader>

      <Content>
        <div className="adjustment">
          <form onSubmit={handleSubmit(handleClickUpdate)}>
            <Input
              type="text"
              modal
              placeholder="Digite o novo título da atividade"
              register={register}
              name="title"
              label="Título:"
              error={errors.title?.message}
            />

            <Button white share loginDesk darkSchema>
              Editar atividade
            </Button>
          </form>
        </div>
      </Content>
    </Container>
  );
};

export default ModalEditActivity;
