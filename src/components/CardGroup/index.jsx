import { Container, ContainerHeader, ContainerMain } from "./style";
import { FiEdit, FiUserPlus, FiUserX } from "react-icons/fi";

import { useContext } from "react";

import { ModalContext } from "../../providers/Modal";
import { GroupsContext } from "../../providers/Groups";
import { UserContext } from "../../providers/User";

import Button from "../Button";

const CardGroup = ({ group, captureGroup }) => {
  const { id, name, category, description, creator, users_on_group } = group;

  const { decodeJwt } = useContext(UserContext);
  const { subscribeToTheGroup, unSubscribeGroup } = useContext(GroupsContext);
  const { setOpenEditGroup, setOpenAllGoals, setOpenAllActivities } =
    useContext(ModalContext);

  const verifySubscribed = users_on_group.find(
    (group) => group.id === decodeJwt.user_id
  );

  return (
    <Container>
      <ContainerHeader>
        <p>{name}</p>
        <div>
          <span>{category}</span>
          {creator.id === decodeJwt.user_id ? (
            <abbr title="Editar grupo">
              <Button
                white
                ativMetaMobile
                onClick={() => {
                  setOpenEditGroup(true);
                  captureGroup(id);
                }}
              >
                <FiEdit size={20} />
              </Button>
            </abbr>
          ) : null}
        </div>
      </ContainerHeader>
      <hr></hr>
      <ContainerMain>
        <p>{description}</p>
        <div>
          <div>
            <abbr title="Ver todas as atiidades">
              <Button
                ativMetaDesk
                onClick={() => {
                  setOpenAllActivities(true);
                  captureGroup(id);
                }}
              >
                Atividades
              </Button>
            </abbr>
            <abbr title="Ver todas as metas">
              <Button
                ativMetaDesk
                onClick={() => {
                  setOpenAllGoals(true);
                  captureGroup(id);
                }}
              >
                Metas
              </Button>
            </abbr>
          </div>
          <div>
            {verifySubscribed !== undefined ? (
              <abbr title="Desinscreva-se">
                <Button
                  white
                  ativMetaMobile
                  onClick={() => {
                    unSubscribeGroup(id);
                  }}
                >
                  <FiUserX size={20} />
                </Button>
              </abbr>
            ) : (
              <abbr title="Inscreva-se">
                <Button
                  white
                  ativMetaMobile
                  onClick={() => {
                    subscribeToTheGroup(id);
                  }}
                >
                  <FiUserPlus size={20} />
                </Button>
              </abbr>
            )}
          </div>
        </div>
      </ContainerMain>
    </Container>
  );
};

export default CardGroup;
