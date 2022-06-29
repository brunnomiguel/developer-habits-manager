import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [addNewHabit, setAddNewHabit] = useState(false);
  const [editHabit, setEditHabit] = useState(false);
  const [editUser, setEditUser] = useState(false);

  //modifiquei
  const [addNewMeta, setAddNewMeta] = useState(false);
  const [showAllGoals, setShowAllGoals] = useState(false);


  return (
    <ModalContext.Provider
      value={{
        addNewHabit,
        setAddNewHabit,
        editHabit,
        setEditHabit,
        editUser,
        setEditUser,
         
        //modifiquei
        addNewMeta,
        setAddNewMeta,
        showAllGoals,
        setShowAllGoals,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
