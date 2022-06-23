import { useContext } from "react";
import { ModalContext } from "../../providers/Modal";

import { Container, Header, Content, Modal } from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import api from "../../services/api";

import { toast } from "react-toastify";

import Input from "../Input";
import Button from "../Button";

import jwt_Decode from "jwt-decode";

const ModalEditUser = () => {
  const userId = localStorage.getItem("@DHM/token");

  const decode = jwt_Decode(userId).user_id;

  const { setEditUser } = useContext(ModalContext);

  const editSchema = yup.object().shape({
    username: yup.string().required("Informe novo nome"),
    email: yup.string().required("insira novo email").email("Email inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(editSchema) });

  const handleUpdateUser = (data) => {
    api.patch(`/user/${decode}/`, data).then((_) =>{
      
    });
  };

  return (
    <Modal>
      <Container>
        <Header>
          <h3>Editar suas informções</h3>
          <button onClick={() => setEditUser(false)}>X</button>
        </Header>
        <Content>
          <form onSubmit={handleSubmit(handleUpdateUser)}>
            <Input
              register={register}
              name={"username"}
              label={"Novo nome de Usuário"}
            />
            <Input register={register} name={"email"} label={"Novo e-mail"} />
          </form>
        </Content>
      </Container>
    </Modal>
  );
};

export default ModalEditUser;
