import Button from "../Button";
import Input from "../Input";

import { Container, Content, EditActivityModalHeader } from "./styles";
import { FiX } from "react-icons/fi";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { ModalContext } from "../../providers/Modal";
import { ActivitiesContext } from "../../providers/Activities";

const ModalEditActivity = ({
  id = "addActivity",
  capturedActivity,
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
    updateActivity(data, capturedActivity.id, capturedGroupId);
    reset();
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenEditActivity(false);
    }
  };
  return (
    <Container id={id} onClick={handleOutsideClick}>
      <EditActivityModalHeader>
        <p>Editar atividade</p>
        <Button onClick={() => setOpenEditActivity(false)}>
          <FiX size={20} />
        </Button>
      </EditActivityModalHeader>

      <Content>
        <div className="adjustment">
          <form onSubmit={handleSubmit(handleClickUpdate)}>
            <Input
              type="text"
              modal
              placeholder="Insira aqui o novo título"
              register={register}
              name="title"
              label="Título:"
              defaultValue={capturedActivity.title}
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
