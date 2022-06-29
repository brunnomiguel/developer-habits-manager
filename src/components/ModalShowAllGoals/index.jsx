import { useContext } from "react";
import { ModalContext} from "../../providers/Modal";
import { Container } from "./styles";
import Button from '../Button';
import { FiX } from "react-icons/fi";
//import ModalAddNewMeta from "../../components/ModalAddNewMeta";

const ModaShowAllGoals = ({id = "modalShowAllGoals"}) => {
  const {  setShowAllGoals } = useContext(ModalContext);
  //const { addNewMeta, setAddNewMeta } = useContext(ModalContext);

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
        setShowAllGoals(false);
    }
  };

  return (
    <Container>
        <div className="modal" id={id} onClick={handleOutsideClick}>
            <div className="container">
                <div className='header'>
                    <span>Meta</span>
                    <FiX className="close" onClick={() => setShowAllGoals(false)}/>
                </div>  
                <div className="content">
                    <p>Crie uma nova meta para este grupo</p>
                    <Button small white /*onClick={() => setAddNewMeta(true)}*/>+</Button>
                    {/*addNewMeta && <ModalAddNewMeta />*/}
                </div> 
                <div className="subtext">
                    <p>Nome da meta</p>
                </div>            
            </div>
        </div>  
    </Container>              
  );
}
  
export default ModaShowAllGoals;



