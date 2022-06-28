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
import CardHabit from "../../components/CardHabit";
import AddNewHabit from "../../components/AddNewHabit";

import { useState, useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { ModalContext } from "../../providers/Modal";

const Habits = () => {
  const { habits } = useContext(HabitsContext);
  const { addNewHabit, setAddNewHabit } = useContext(ModalContext);

  const [displayHabits, setDisplayHabits] = useState([]);

  const [inputHabits, setInputHabits] = useState("");

  const [previuPage, setPreviuPage] = useState(0);
  const [nextPage, setNextPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  const upPages = () => {
    if (nextPage < habits.length) {
      setNextPage(nextPage + 6);
      setPreviuPage(previuPage + 6);
      setCurrentPage(currentPage + 1);
    }
  }

  const downPages = () => {
    if (previuPage > 0) {
      setPreviuPage(previuPage - 6);
      setNextPage(nextPage - 6);
      setCurrentPage(currentPage - 1);
    }
  };

  const searchHabit = (inputHabits) => {
    inputHabits = inputHabits.toLocaleLowerCase();
    const filteredHabit = habits.filter((habit) => {
      if (
        habit.title.toLocaleLowerCase().includes(inputHabits) ||
        habit.category.toLocaleLowerCase().includes(inputHabits)
      ) {
        return habit;
      }
    });
    setDisplayHabits(filteredHabit);
  };

  return (
    <Container>
      <Navbar />
      <Tittle>
        <h2>Seus Hábitos</h2>
        <AddBttn>
          <span>Adicione um novo hábito</span>
          <Button white onClick={() => setAddNewHabit(true)}>
            <FiPlus size={20} />
          </Button>
        </AddBttn>
      </Tittle>
      <InputBttnContainer>
        <Input
          placeholder="Buscar Hábitos"
          type="text"
          value={inputHabits}
          onChange={(ev) => {
            setInputHabits(ev.target.value);
            searchHabit(ev.target.value);
          }}
          searchHabit={searchHabit}
          inputHabits={inputHabits}
          search
        >
          <FiSearch />
        </Input>
        <AddBttn>
          <span>Adicione um novo hábito</span>
          <Button white onClick={() => setAddNewHabit(true)}>
            <FiPlus size={20} />
          </Button>
        </AddBttn>
      </InputBttnContainer>
      <CardsContainer>
        {inputHabits === ""
          ? habits.slice(previuPage, nextPage).map((habit) => {
              return <CardHabit key={habit.id} habit={habit} />;
            })
          : displayHabits.map((habit) => {
              return <CardHabit key={habit.id} habit={habit} />;
            })}
      </CardsContainer>
      <PageButtons>
        <Button white onClick={() => downPages()}>
          <FiChevronLeft size={20} />
        </Button>
        <span>{currentPage + 1}</span>
        <Button white onClick={() => upPages()}>
          <FiChevronRight size={20} />
        </Button>
      </PageButtons>
      {addNewHabit && <AddNewHabit />}
    </Container>
  );
};


export default Habits;
