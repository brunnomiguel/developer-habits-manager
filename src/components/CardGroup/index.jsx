import { Container, ContainerHeader, ContainerMain } from "./style";
import { FiEdit, FiUserX } from "react-icons/fi";

import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";

import Button from "../Button";
import { ModalContext } from "../../providers/Modal";

const CardGroup = ({ habit, captureHabit }) => {
  const { id, title, category } = habit;

  const { editGroup } = useContext(GroupsContext);
  const { openEditGroup } = useContext(ModalContext);
  const { openAllGoals } = useContext(ModalContext);
  const { openAllActivities } = useContext(ModalContext);

  return (
    <Container>
      <ContainerHeader>
        <p>{title}</p>
        <div>
          <span>{category}</span>
          {/* precisa criar uma prop pro botao para exibir o botao de editar */}
          {/* ... somente se eu for o dono do grupo */}
          <Button
            white
            ativMetaDesk
            onClick={() => {
              openEditGroup(true);
              captureHabit(id);
            }}
          >
            <FiEdit size={20} />
          </Button>
        </div>
      </ContainerHeader>
      <hr></hr>

      <ContainerMain>
        <p>Descrição do grupo</p>
        <div className="conjunto-de-botoes">
          <div className="dupla-de-botoes">
            <Button
              white
              ativMetaDesk
              onClick={() => {
                openAllActivities(true);
                captureHabit(id);
              }}
            >
              Atividades
            </Button>
            <Button
              white
              ativMetaDesk
              onClick={() => {
                openAllGoals(true);
                captureHabit(id);
              }}
            >
              Metas
            </Button>
          </div>
          <Button
            white
            ativMetaDesk
            onClick={() => {
              openEditGroup(true);
              captureHabit(id);
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

// Montagem básica
// Container geral{
//   container header{
//     texto
//       div
//         texto
//         botao
//       div
//   }
//   container main{
//     texto
//       div
//           div
//             texto
//             botao
//           div
//         botao
//       div
//   }
// }/  