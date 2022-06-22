import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [addNewHabit, setAddNewHabit] = useState(false);
  const [editHabit, setEditHabit] = useState(false);
  const [editUser, setEditUser] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        addNewHabit,
        setAddNewHabit,
        editHabit,
        setEditHabit,
        editUser,
        setEditUser,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
