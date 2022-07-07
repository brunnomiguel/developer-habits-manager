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

import { LinearProgress, Box } from "@mui/material";

import { useState, useContext } from "react";
import { HabitsContext } from "../../providers/Habits";
import { ModalContext } from "../../providers/Modal";

import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import CardHabit from "../../components/CardHabit";
import ModalAddNewHabit from "../../components/ModalAddNewHabit";
import ModalEditHabit from "../../components/ModalEditHabit";

const Habits = () => {
  const { habits, loading, currentPage, setCurrentPage} = useContext(HabitsContext);
  const { openAddNewHabit, setOpenAddNewHabit, openEditHabit } =
    useContext(ModalContext);

  const [habitsResearcheds, setHabitsResearcheds] = useState([]);
  const [capturedHabit, setCapturedHabit] = useState({});
  const [inputHabits, setInputHabits] = useState("");

  const [previuPage, setPreviuPage] = useState(0);
  const [nextPage, setNextPage] = useState(6);

  const upPages = () => {
    if (nextPage < habits.length) {
      setNextPage(nextPage + 6);
      setPreviuPage(previuPage + 6);
      setCurrentPage(currentPage + 1);
    }
  };

  const downPages = () => {
    if (previuPage > 0) {
      setPreviuPage(previuPage - 6);
      setNextPage(nextPage - 6);
      setCurrentPage(currentPage - 1);
    }
  };

  const searchHabit = (inputHabits) => {
    inputHabits = inputHabits.toLocaleLowerCase();
    const filteredHabit = habits.filter((habit) =>
      habit.title.toLocaleLowerCase().includes(inputHabits) ||
      habit.category.toLocaleLowerCase().includes(inputHabits)
        ? habit
        : null
    );
    setHabitsResearcheds(filteredHabit);
  };

  const captureHabit = (habitId) => {
    const verifyHabit = habits.filter((habit) => habit.id === habitId);
    setCapturedHabit(...verifyHabit);
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="adjustment">
          <Tittle>
            <h2>Seus Hábitos</h2>
            <AddBttn>
              <span>Adicionar hábito</span>
              <Button white onClick={() => setOpenAddNewHabit(true)}>
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
              <span>Adicionar hábito</span>
              <Button white onClick={() => setOpenAddNewHabit(true)}>
                <FiPlus size={20} />
              </Button>
            </AddBttn>
          </InputBttnContainer>
        </div>
        <CardsContainer>
          {loading ? (
            <Box sx={{ width: "100%", alignSelf: "flex-start" }}>
              <LinearProgress color="success" />
            </Box>
          ) : habits.length < 1 ? (
            <h2>Você não possui nenhum hábito cadastrado, adicione!</h2>
          ) : inputHabits === "" ? (
            habits.slice(previuPage, nextPage).map((habit) => {
              return (
                <CardHabit
                  key={habit.id}
                  captureHabit={captureHabit}
                  habit={habit}
                />
              );
            })
          ) : (
            habitsResearcheds.map((habit) => {
              return (
                <CardHabit
                  key={habit.id}
                  captureHabit={captureHabit}
                  habit={habit}
                />
              );
            })
          )}
        </CardsContainer>
        <PageButtons>
          <Button white onClick={() => downPages()}>
            <FiChevronLeft size={20} />
          </Button>
          <span>{currentPage}</span>
          <Button white onClick={() => upPages()}>
            <FiChevronRight size={20} />
          </Button>
        </PageButtons>
        {openAddNewHabit && <ModalAddNewHabit />}
        {openEditHabit && <ModalEditHabit capturedHabit={capturedHabit} />}
      </Container>
    </>
  );
};

export default Habits;
