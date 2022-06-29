import { useContext } from "react";
import { ModalContext} from "../../providers/Modal";
import { Container } from "./styles";
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { FiX } from "react-icons/fi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ModalAddNewMeta = ({id = "modalAddNewMeta"}) => {
  const { addNewMeta, setAddNewMeta } = useContext(ModalContext);
  
  const editSchema = yup.object().shape({
    title: yup.string().required('Campo o brigatório'),
    difficulty: yup.string().required('Campo obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(editSchema) });
  
  const onSubmitFunction = (data) => {
    addNewMeta(data);
  };

  const handleOutsideClick = (event) => {
    if (event.target.id === id) {
      setAddNewMeta(false)
    }
  }

  return (
    <Container>
        <div className="modal" id={id} onClick={handleOutsideClick} >
            <div className="container">
                <div className='header'>
                    <span>Nova meta</span>
                    <FiX className="close" onClick={() => setAddNewMeta(false)}/>
                </div>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                  <div className="input-white">
                  <Input
                    modal
                    placeholder="Digite o título"
                    register={register}
                    name="title"
                    label="Título: "
                    error={errors.title?.message}
                    type="text"
                  />
                  </div>
                  <Select className="select" register={register} name="difficulty" />
                  <Button type="submit" modal white share className='new'>Nova meta</Button>
                </form>                
            </div>
        </div>  
    </Container>              
  );
}
  
export default ModalAddNewMeta;



