import {
  Container,
  CardsContainer,
  Tittle,
  AddBttn,
  PageButtons,
  InputBttnContainer,
} from "./styles";

import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
  FiSearch,
} from "react-icons/fi";

import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { useContext } from "react";
import { ModalContext } from "../../providers/Modal";
import AddNewHabit from "../../components/AddNewHabit";

const Habits = () => {
  const { addNewHabit, setAddNewHabit } = useContext(ModalContext);
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
        <Input search placeholder="Buscar Hábitos">
          <FiSearch />
        </Input>
        <AddBttn>
          <span>Adicione um novo hábito</span>
          <Button white>
            <FiPlus size={20} />
          </Button>
        </AddBttn>
      </InputBttnContainer>
      <CardsContainer></CardsContainer>
      <PageButtons>
        <Button white>
          <FiChevronLeft size={20} />
        </Button>
        <span>2</span>
        <Button white>
          <FiChevronRight size={20} />
        </Button>
      </PageButtons>

      <button onClick={() => setAddNewHabit(true)}>abrir modal</button>
      {addNewHabit ? <AddNewHabit /> : null}
    </Container>
  );
};

export default Habits;
