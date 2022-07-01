import { Container, ContainerHeader, ContainerMain } from "./style";
import { FiEdit, FiUserX } from "react-icons/fi";

import { useContext } from "react";
// import { GroupsContext } from "../../providers/Groups";

import Button from "../Button";
import { ModalContext } from "../../providers/Modal";

const CardGroup = ({ group, captureGroup, capturedGroupId }) => {
  const { id, name, category, description } = group;

  // const { editGroup } = useContext(GroupsContext);
  const { setOpenEditGroup } = useContext(ModalContext);
  const { setOpenAllGoals } = useContext(ModalContext);
  const { setOpenAllActivities } = useContext(ModalContext);

  return (
    <Container>
      <ContainerHeader>
        <p>{name}</p>
        <div>
          <span>{category}</span>
          {/* precisa criar uma prop pro botao para exibir o botao de editar */}
          {/* ... somente se eu for o dono do grupo */}
          <Button
            white
            ativMetaDesk
            onClick={() => {
              setOpenEditGroup(true);
              captureGroup(id);
            }}
          >
            <FiEdit size={20} />
          </Button>
        </div>
      </ContainerHeader>
      <hr></hr>
      <ContainerMain>
        <p>{description}</p>
        <div className="conjunto-de-botoes">
          <div className="dupla-de-botoes">
            <Button
              black
              ativMetaDesk
              onClick={() => {
                setOpenAllActivities(true);
                captureGroup(id);
              }}
            >
              Atividades
            </Button>
            <Button
              black
              ativMetaDesk
              onClick={() => {
                setOpenAllGoals(true);
                captureGroup(id);
              }}
            >
              Metas
            </Button>
          </div>
          <Button
            white
            ativMetaDesk
            onClick={() => {
              setOpenEditGroup(true);
              captureGroup(id);
            }}
          >
            <FiUserX size={20} />
          </Button>
        </div>
      </ContainerMain>
    </Container>
  );
};

export default CardGroup;
