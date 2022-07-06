import { useContext, useState } from "react";

import { Container, EditHabitModalHeader, Content } from "./styles";
import { FiX } from "react-icons/fi";

import { ModalContext } from "../../providers/Modal";
import { HabitsContext } from "../../providers/Habits";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Button from "../Button";
import Input from "../Input";

const ModalEditHabit = ({ id = "modalEditHabit", capturedHabit }) => {
  const { setOpenEditHabit } = useContext(ModalContext);
  const { updateHabit } = useContext(HabitsContext);

  const editSchema = yup.object().shape({
    how_much_achieved: yup.number(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(editSchema),
  });

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setOpenEditHabit(false);
    }
  };

  const update = (data) => {
    updateHabit(data, capturedHabit.id);
    setOpenEditHabit(false);
  };

  return (
    <Container id={id} onClick={handleOutsideClick}>
      <EditHabitModalHeader>
        <p>Atualize sua evolução</p>
        <Button onClick={() => setOpenEditHabit(false)}>
          <FiX size={20} />
        </Button>
      </EditHabitModalHeader>
      <Content>
        <p>Progresso</p>
        <div>
          <h6>0%</h6>
          <h6>10</h6>
          <h6>20</h6>
          <h6>30</h6>
          <h6>40</h6>
          <h6>50</h6>
          <h6>60</h6>
          <h6>70</h6>
          <h6>80</h6>
          <h6>90</h6>
          <h6>100%</h6>
        </div>
        <form onSubmit={handleSubmit(update)}>
          <Input
            type="range"
            name="how_much_achieved"
            min="0"
            max="100"
            register={register}
          />
          <Button type="submit" modal white darkSchema>
            Atualize sua evolução
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default ModalEditHabit;
