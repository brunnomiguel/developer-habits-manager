import {Container, Header, Content, ContainerBtn} from './style'

import { FiEdit, FiDelete } from "react-icons/fi";

import {GoalsContext} from "../../providers/Goals"
import { useContext } from 'react';
import Button from '../Button';

const CardMeta = ({goal}) => {
    const {title, difficulty} = goal;

    const {goals} = useContext(GoalsContext)
    console.log(goals)
    return ( 
        <Container>
                <Header><h3>{title}</h3></Header>
                <Content>
                    <p>{difficulty}</p>
                </Content>
                <ContainerBtn>
                <Button white>
          <FiEdit size={20} />
        </Button>
        <Button white>
          <FiDelete size={20} />
        </Button>
                </ContainerBtn>
        </Container>
     );
}
 
export default CardMeta;