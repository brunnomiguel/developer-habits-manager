import { useContext, useState } from "react";
import { ModalContext} from "../../providers/Modal";
import { Container } from "./styles";
import Button from '../Button';
import { FiX } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { HabitsContext } from "../../providers/Habits";
import Input from "../Input";

const ModalEditHabit = ({ id }) => {
  const { setEditHabit } = useContext(ModalContext);
  const { updateHabit } = useContext(HabitsContext);
  const [valor, setValor] = useState(0)
  
  function onChange(ev) {
    const { value } = ev.target;
    setValor(value);
    console.log(valor)
  }

   const editSchema = yup.object().shape({
    how_much_achieved: yup.number(),
  });

  const {
    register,
    handleSubmit,
    /*formState: { },*/
  } = useForm({ resolver: yupResolver(editSchema) });

  return (
    <Container>
        <div className="modal">
            <div className="container">
                <div className='header'>
                    <span>Atualize sua evolução</span>
                    <FiX className="close" onClick={() => setEditHabit(false)}/>
                </div>
                <p>Progresso</p>
                <div className='signals'>
                    <h6>0%</h6>
                    <h6>10</h6>
                    <h6>20</h6>
                    <h6>30</h6>
                    <h6>40</h6>
                    <h6>50</h6>
                    <h6>60</h6>
                    <h6>70</h6>
                    <h6>80</h6>
                    <h6>90</h6>
                    <h6>100%</h6>
                </div>
                <form onSubmit={handleSubmit()}>
                  <Input  type="range"
                          list="tickmarks"
                          name='cont'
                          defaultValue= {valor}
                          min="0"
                          max="100"
                          onChange={onChange}
                          {...register("how_much_achieved")}
                  />
                  <datalist id="tickmarks">
                    <option value="0"></option>
                    <option value="10"></option>
                    <option value="20"></option>
                    <option value="30"></option>
                    <option value="40"></option>
                    <option value="50"></option>
                    <option value="60"></option>
                    <option value="70"></option>
                    <option value="80"></option>
                    <option value="90"></option>
                    <option value="100"></option>
                  </datalist>
                  <Button type="submit" modal white className='update'>Atualize sua evolução</Button>
                </form>                
            </div>
        </div>  
    </Container>              
  );
}
  
export default ModalEditHabit;



