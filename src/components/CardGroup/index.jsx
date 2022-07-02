import { Container, ContainerHeader, ContainerMain } from "./style";
import { FiEdit, FiUserX } from "react-icons/fi";

import { useContext } from "react";
import { useState } from "react";
// import { GroupsContext } from "../../providers/Groups";

import Button from "../Button";
import { ModalContext } from "../../providers/Modal";
import { GroupsContext } from "../../providers/Groups";
import { UserContext } from "../../providers/User";

const CardGroup = ({ group, captureGroup, capturedGroupId }) => {
  const { id, name, category, description, creator, users_on_group } = group;
  const EditGroupOn = useState(false);

  const { decodeJwt } = useContext(UserContext);
  const { editGroup } = useContext(GroupsContext);
  const { subscribeToTheGroup } = useContext(GroupsContext);
  const { unSubscribeGroup } = useContext(GroupsContext);
  const { setOpenEditGroup } = useContext(ModalContext);
  const { setOpenAllGoals } = useContext(ModalContext);
  const { setOpenAllActivities } = useContext(ModalContext);

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
        {/* lembrar de ativar o description depois do teste com lorem */}
        {/* <p>{description}</p> */}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="conjunto-de-botoes">
          <div className="dupla-de-botoes">
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
          {/* Aqui vai um ternário para renderizar um buton com função diferente caso ele esteja inscrito ou não */}
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
      </ContainerMain>
    </Container>
  );
};

export default CardGroup;
