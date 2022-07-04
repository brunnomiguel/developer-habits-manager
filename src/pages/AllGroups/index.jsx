import React, { useContext, useState } from "react";
import { ModalContext } from "../../providers/Modal";
import { GroupsContext } from "../../providers/Groups";

import {
  Container,
  CardsContainer,
  Tittle,
  PageButtons,
  InputBttnContainer,
} from "./styled";

import { FiSearch, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LinearProgress, Box } from "@mui/material";

import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import CardGroup from "../../components/CardGroup";
import ModalShowActivities from "../../components/ModalShowActivities";
import ModalShowAllGoals from "../../components/ModalShowAllGoals";
import ModalEditGroup from "../../components/ModalEditGroup";

const AllGroups = () => {
  const { allGroups, loading } = useContext(GroupsContext);
  const { openAllActivities, openAllGoals, openEditGroup } =
    useContext(ModalContext);

  const [displayGroup, setDisplayGroup] = useState([]);
  const [capturedGroup, setCapturedGroup] = useState({});
  const [inputGroup, setInputGroup] = useState("");

  const searchGroup = (inputGroup) => {
    inputGroup = inputGroup.toLocaleLowerCase();
    const filteredGroup = allGroups.results.filter((group) =>
      group.name.toLocaleLowerCase().includes(inputGroup) ||
      group.category.toLocaleLowerCase().includes(inputGroup)
        ? group
        : null
    );
    setDisplayGroup(filteredGroup);
  };

  const captureGroup = (groupId) => {
    const verifyGroup = allGroups.results.filter(
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
        </div>
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
        {openAllActivities && (
          <ModalShowActivities capturedGroup={capturedGroup} />
        )}
        {openAllGoals && <ModalShowAllGoals capturedGroup={capturedGroup} />}
        {openEditGroup && <ModalEditGroup captureGroupId={capturedGroup.id} />}
      </Container>
    </>
  );
};

export default AllGroups;
