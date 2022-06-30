import React, { useContext, useState } from "react";

import {
  Container,
  CardsContainer,
  Tittle,
  AddBttn,
  PageButtons,
  InputBttnContainer,
} from "./styled";

import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";

import Navbar from "../../components/Navbar";
import Input from "../../components/Input";

import { LinearProgress, Box } from "@mui/material";

import { GroupsContext } from "../../providers/Groups";
import Button from "../../components/Button";
import CardGroup from "../../components/CardGroup";
import Activities from "../../components/Activities";
import ModalShowAllGoals from "../../components/ModalShowAllGoals";
import { ModalContext } from "../../providers/Modal";

const AllGroups = () => {
  const { allGroups, loading } = useContext(GroupsContext);
  const { openAllActivities, openAllGoals } = useContext(ModalContext);

  const [displayGroup, setDisplayGroup] = useState([]);
  const [capturedGroup, setCapturedGroup] = useState({});
  const [inputGroup, setInputGroup] = useState("");

  const searchGroup = (inputGroup) => {
    inputGroup = inputGroup.toLocaleLowerCase();
    const filteredGroup = allGroups.results.filter((group) => {
      if (
        group.name.toLocaleLowerCase().includes(inputGroup) ||
        group.category.toLocaleLowerCase().includes(inputGroup)
      ) {
        return group;
      }
    });
    setDisplayGroup(filteredGroup);
  };

  const captureGroup = (groupId) => {
    const verifyGroup = allGroups.results.filter(
      (group) => group.id === groupId
    );
    setCapturedGroup(...verifyGroup);
  };

  return (
    <Container>
      <Navbar />
      <Tittle>
        <h2>Todos os grupos</h2>
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
      </InputBttnContainer>
      <CardsContainer>
        {loading ? (
          <Box sx={{ width: "100%", alignSelf: "flex-start" }}>
            <LinearProgress color="success" />
          </Box>
        ) : inputGroup === "" ? (
          allGroups.results?.map((group) => {
            return (
              <CardGroup
                key={group.id}
                group={group}
                captureGroup={captureGroup}
              />
            );
          })
        ) : (
          displayGroup.map((group) => {
            return (
              <CardGroup
                key={group.id}
                group={group}
                captureGroup={captureGroup}
              />
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
      {openAllActivities && <Activities capturedGroup={capturedGroup} />}
      {openAllGoals && <ModalShowAllGoals capturedGroup={capturedGroup} />}
    </Container>
  );
};

export default AllGroups;
