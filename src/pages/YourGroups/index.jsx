import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GroupsContext } from "../../providers/Groups";
import { ModalContext } from "../../providers/Modal";

import {
  Container,
  CardsContainer,
  Tittle,
  PageButtons,
  InputBttnContainer,
  AddBttn,
} from "./styled";

import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";

import { LinearProgress, Box } from "@mui/material";

import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import CardGroup from "../../components/CardGroup";
import ModalShowActivities from "../../components/ModalShowActivities";
import ModalShowAllGoals from "../../components/ModalShowAllGoals";
import ModalAddNewGroup from "../../components/ModalAddNewGroup";

const YourGroups = () => {
  const { groupsSubscribed, loading } = useContext(GroupsContext);
  const {
    openAllActivities,
    openAllGoals,
    openAddNewGroup,
    setOpenAddNewGroup,
  } = useContext(ModalContext);

  const [displayGroup, setDisplayGroup] = useState([]);
  const [capturedGroup, setCapturedGroup] = useState({});
  const [inputGroup, setInputGroup] = useState("");

  const searchGroup = (inputGroup) => {
    inputGroup = inputGroup.toLocaleLowerCase();
    const filteredGroup = groupsSubscribed.filter((group) =>
      group.name.toLocaleLowerCase().includes(inputGroup) ||
      group.category.toLocaleLowerCase().includes(inputGroup)
        ? group
        : null
    );
    setDisplayGroup(filteredGroup);
  };

  const captureGroup = (groupId) => {
    const verifyGroup = groupsSubscribed.filter(
      (group) => group.id === groupId
    );
    setCapturedGroup(...verifyGroup);
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="adjustment">
          <Tittle>
            <h2>Seus Grupos</h2>
            <AddBttn>
              <span>Adicione um novo grupo</span>
              <Button white onClick={() => setOpenAddNewGroup(true)}>
                <FiPlus size={20} />
              </Button>
            </AddBttn>
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
              <span>Adicione um novo grupo</span>
              <Button white>
                <FiPlus size={20} onClick={() => setOpenAddNewGroup(true)} />
              </Button>
            </AddBttn>
          </InputBttnContainer>
        </div>
        <CardsContainer>
          {loading ? (
            <Box sx={{ width: "100%", alignSelf: "flex-start" }}>
              <LinearProgress color="success" />
            </Box>
          ) : groupsSubscribed.length < 1 ? (
            <h2>
              Você não possui nenhum grupo cadastrado,
              <Link to="/AllGroups"> entre em um grupo!</Link>
            </h2>
          ) : inputGroup === "" ? (
            groupsSubscribed?.map((group) => {
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
        {openAllActivities && (
          <ModalShowActivities capturedGroup={capturedGroup} />
        )}
        {openAllGoals && <ModalShowAllGoals capturedGroup={capturedGroup} />}
        {openAddNewGroup && <ModalAddNewGroup />}
      </Container>
    </>
  );
};

export default YourGroups;
