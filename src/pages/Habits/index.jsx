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
import CardHabito from "../../components/CardHabito";

import { useState, useContext } from "react";
import { HabitsContext } from "../../providers/Habits";

const Habits = () => {
  const { habits, setHabits } = useContext(HabitsContext);

  const [displayHabits, setDisplayHabits] = useState(habits);

  const [inputHabits, setInputHabits] = useState("");

  const searchHabit = (inputHabits) => {
    inputHabits = inputHabits.toLocaleLowerCase();
    const filteredHabit = habits.filter(
      (habit) =>
        habit.title.toLocaleLowerCase() === inputHabits ||
        habit.category.toLocaleLowerCase() === inputHabits
    );
    setDisplayHabits(filteredHabit);
    setInputHabits("");
  };
  
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
        <Input
          placeholder="Buscar Hábitos"
          type="text"
          value={inputHabits}
          onChange={(ev) => setInputHabits(ev.target.value)}
          searchHabit={searchHabit}
          inputHabits={inputHabits}
          search
        >
          <FiSearch />
        </Input>
        <AddBttn>
          <span>Adicione um novo hábito</span>
          <Button white>
            <FiPlus size={20} />
          </Button>
        </AddBttn>
      </InputBttnContainer>
      <CardsContainer>
        <>
          {displayHabits.map((habit) => {
            return <CardHabito key={habits.id} habit={habit} />;
          })}
        </>
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
