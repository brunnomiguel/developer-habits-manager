import React from "react";

import { Container, LabelContainer, Select } from "./styled";

const SelectComponent = ({ register, errors, ...rest }) => {
  return (
    <Container>
      <LabelContainer>
        <label>Dificuldade</label>
        {/* {!!errors.dificult?.message && (
          <span style={{ color: "#c53030" }}>
            -{errors.dificult.message}
          </span>
        )} */}
      </LabelContainer>
      <Select
        name="dificult"
        // {...register("dificult")}
      >
        <option value={"Fácil"}>Fácil</option>
        <option value={"Médio"}>Médio</option>
        <option value={"Difícil"}>Difícil</option>
        <option value={"Extremo"}>Extremo</option>
      </Select>
    </Container>
  );
};

export default SelectComponent;
