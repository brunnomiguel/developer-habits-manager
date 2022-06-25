import { useState, useContext } from "react";
import { ModalContext } from "../../providers/Modal";
import { Container } from "./styles";
import Button from "../Button";

const ModalEditHabit = ({ children }) => {
  const {setEditHabit} = useContext(ModalContext)

  return (
      <Container>
          <div className="modal">
              <div className="container">
                  <div className='header'>
                      <span>Atualize sua evolução</span>
                      <button onClick={() => setEditHabit(false)}>X</button>
                  </div>
                  <p>Progresso</p>
                  <div className='signals'>
                        <h6>0</h6>
                        <h6>10</h6>
                        <h6>20</h6>
                        <h6>30</h6>
                        <h6>40</h6>
                        <h6>50</h6>
                        <h6>60</h6>
                        <h6>70</h6>
                        <h6>80</h6>
                        <h6>90</h6>
                        <h6>100</h6>
                  </div>
                  <input type="range" list="tickmarks" defaultValue="0" min="0" max="100" />
                    <datalist id="tickmarks">
                        <option value="0" label="0%"></option>
                        <option value="10"></option>
                        <option value="20"></option>
                        <option value="30"></option>
                        <option value="40"></option>
                        <option value="50" label="50%"></option>
                        <option value="60"></option>
                        <option value="70"></option>
                        <option value="80"></option>
                        <option value="90"></option>
                        <option value="100" label="100%"></option>
                    </datalist>
                  <Button modal className='update'>Atualize sua evolução</Button>
              </div>
          </div>  
      </Container>
              
  );
};
  
export default ModalEditHabit;



