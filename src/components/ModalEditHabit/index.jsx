import { useContext, useState } from "react";

import { Container } from "./styles";
import { FiX } from "react-icons/fi";

import { ModalContext } from "../../providers/Modal";
import { HabitsContext } from "../../providers/Habits";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Button from "../Button";

const ModalEditHabit = ({ id = "modalEditHabit", habitId }) => {
  const { setEditHabit } = useContext(ModalContext);
  const { updateHabit } = useContext(HabitsContext);
  const [value, setValue] = useState(0);

  const editSchema = yup.object().shape({
    how_much_achieved: yup.number(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(editSchema),
  });

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setEditHabit(false);
    }
  };

  const update = (data) => {
    updateHabit(data, habitId);
    setEditHabit(false);
  };

  return (
    <Container>
      <div className="modal" id={id} onClick={handleOutsideClick}>
        <div className="container">
          <div className="header">
            <span>Atualize sua evolução</span>
            <FiX className="close" onClick={() => setEditHabit(false)} />
          </div>
          <p>Progresso</p>
          <div className="signals">
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
            <input
              type="range"
              list="tickmarks"
              name="cont"
              defaultValue={value}
              min="0"
              max="100"
              onChange={(ev) => setValue(ev.target.value)}
              {...register("how_much_achieved")}
            />
            <datalist id="tickmarks">
              <option value="0"></option>
              <option value="10"></option>
              <option value="20"></option>
              <option value="30"></option>
              <option value="40"></option>
              <option value="50"></option>
              <option value="60"></option>
              <option value="70"></option>
              <option value="80"></option>
              <option value="90"></option>
              <option value="100"></option>
            </datalist>
            <Button type="submit" modal white className="update">
              Atualize sua evolução
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ModalEditHabit;
