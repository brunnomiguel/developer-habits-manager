import {
  Container,
  CardsContainer,
  Tittle,
  AddBttn,
  InputTest,
  Card,
  PageButtons,
  InputBttnContainer,
} from "./styles";

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

const Habits = () => {
  return (
    <Container>
      <Navbar />
      <Tittle>
        <h2>Seus Hábitos</h2>
        <AddBttn>
          <span>Adicione um novo hábito</span>
          <Button white>
            <FiPlus size={20} />
          </Button>
        </AddBttn>
      </Tittle>
      <InputBttnContainer>
        {/* <InputTest placeholder="Buscar Hábitos" /> */}
        <Input placeholder="Buscar Hábitos" />
        <AddBttn>
          <span>Adicione um novo hábito</span>
          <Button white>
            <FiPlus size={20} />
          </Button>
        </AddBttn>
      </InputBttnContainer>
      <CardsContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsContainer>
      <PageButtons>
        <Button white>
          <FiChevronLeft size={20} />
        </Button>
        <span>2</span>
        <Button white>
          <FiChevronRight size={20} />
        </Button>
      </PageButtons>
    </Container>
  );
};

export default Habits;
