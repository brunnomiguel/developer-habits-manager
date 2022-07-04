import { Container, ContainerHeader, ContainerMain } from "./style";
import { FiEdit, FiUserX } from "react-icons/fi";

import { useContext } from "react";

import { ModalContext } from "../../providers/Modal";
import { GroupsContext } from "../../providers/Groups";
import { UserContext } from "../../providers/User";

import Button from "../Button";

const CardGroup = ({ group, captureGroup, capturedGroupId }) => {
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
          ) : null}
        </div>
      </ContainerHeader>
      <hr></hr>
      <ContainerMain>
        <p>{description}</p>
        <div>
          <div>
            <Button
              ativMetaDesk
              onClick={() => {
                setOpenAllActivities(true);
                captureGroup(id);
              }}
            >
              Atividades
            </Button>
            <Button
              ativMetaDesk
              onClick={() => {
                setOpenAllGoals(true);
                captureGroup(id);
              }}
            >
              Metas
            </Button>
          </div>
          <div>
            {verifySubscribed !== undefined ? (
              <Button
                white
                ativMetaMobile
                onClick={() => {
                  unSubscribeGroup(id);
                }}
              >
                <FiUserX size={20} />
              </Button>
            ) : (
              <Button
                white
                ativMetaMobile
                onClick={() => {
                  subscribeToTheGroup(id);
                }}
              >
                <FiEdit size={20} />
              </Button>
            )}
          </div>
        </div>
      </ContainerMain>
    </Container>
  );
};

export default CardGroup;
