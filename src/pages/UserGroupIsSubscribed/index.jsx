import React, { useContext, useState } from "react";

import {
  Container,
  CardsContainer,
  Tittle,
  PageButtons,
  InputBttnContainer,
  AddBttn
} from "./styled";

import { FiSearch, FiChevronLeft, FiChevronRight,FiPlus } from "react-icons/fi";

import Navbar from "../../components/Navbar";
import Input from "../../components/Input";

import { LinearProgress, Box } from "@mui/material";

import { GroupsContext } from "../../providers/Groups";
import Button from "../../components/Button";

const UserGroupIsSubscribed = () => {
  const { groupsSubscribed, loading } = useContext(GroupsContext);
  const [displayGroup, setDisplayGroup] = useState([]);
  const [captureGroup, setCaptureGroup] = useState({});
  const [inputGroup, setInputGroup] = useState("");

  const searchGroup = (inputGroup) => {
    inputGroup = inputGroup.toLocaleLowerCase();
    const filteredGroup = groupsSubscribed.filter((group) => {
      if (
        group.name.toLocaleLowerCase().includes(inputGroup) ||
        group.category.toLocaleLowerCase().includes(inputGroup)
      ) {
        return group;
      }
    });
    setDisplayGroup(filteredGroup);
  };

  const captureGroups = (groupId) => {
    const verifyGroup = groupsSubscribed.filter(
      (group) => group.results.id === groupId
    );
    setCaptureGroup(...verifyGroup);
  };

  return (
    <Container>
      <Navbar />
      <Tittle>
        <h2>seus grupos</h2>
      </Tittle>
      <InputBttnContainer>
        <Input
          search
          value={inputGroup}
          inputHabits={inputGroup}
          searchHabit={searchGroup}
          placeholder={"Busque um grupo específico"}
          onChange={(ev) => {
            setInputGroup(ev.target.value);
            searchGroup(ev.target.value);
          }}
        >
          <FiSearch />
        </Input>
        <AddBttn>
          <span>Adicione um novo Gupo</span>
          <Button white >
            <FiPlus size={20} />
          </Button>
        </AddBttn>
      </InputBttnContainer>
      <CardsContainer>
        {loading ? (
          <Box sx={{ width: "100%", alignSelf: "flex-start" }}>
            <LinearProgress color="success" />
          </Box>
        ) : inputGroup === "" ? (
            groupsSubscribed?.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })
        ) : (
          displayGroup.map((group) => {
            return (
              <p key={group.id}>{group.name}</p>
              // <CardHabit
              //   key={habit.id}
              //   captureHabit={captureHabit}
              //   habit={habit}
              // />
            );
          })
        )}
      </CardsContainer>
      <PageButtons>
        <Button white>
          <FiChevronLeft size={20} />
        </Button>
        <span>1</span>
        <Button white>
          <FiChevronRight size={20} />
        </Button>
      </PageButtons>
      {/* {addNewHabit && <AddNewHabit />}
      {editHabit && <ModalEditHabit capturedHabit={capturedHabit} />} */}
    </Container>
  );
};

export default UserGroupIsSubscribed;
