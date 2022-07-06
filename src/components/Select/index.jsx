import React from "react";

import { Container, Select } from "./styled";

const SelectComponent = ({ name, register, errors, ...rest }) => {
  return (
    <Container>
      <div>
        <label>Dificuldade:</label>
      </div>
      <Select {...register(name)} {...rest}>
        <option value="Fácil">Fácil</option>
        <option value="Médio">Médio</option>
        <option value="Difícil">Difícil</option>
        <option value="Extremo">Extremo</option>
      </Select>
    </Container>
  );
};

export default SelectComponent;
