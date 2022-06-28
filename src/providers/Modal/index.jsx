import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [openAddNewHabit, setOpenAddNewHabit] = useState(false);
  const [openEditHabit, setOpenEditHabit] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [openAddNewGroup, setOpenAddNewGroup] = useState(false);
  const [openEditGroup, setOpenEditGroup] = useState(false);
  const [openAllGoals, setOpenAllGoals] = useState(false);
  const [openAddNewGoal, setOpenAddNewGoal] = useState(false);
  const [openAllActivities, setOpenAllActivities] = useState(false);
  const [openAddNewActivity, setOpenAddNewActivity] = useState(false);
  const [openEditActivity, setOpenEditActivity] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openAddNewHabit,
        setOpenAddNewHabit,
        openEditHabit,
        setOpenEditHabit,
        openEditUser,
        setOpenEditUser,
        openAddNewGroup,
        setOpenAddNewGroup,
        openEditGroup,
        setOpenEditGroup,
        openAllGoals,
        setOpenAllGoals,
        openAddNewGoal,
        setOpenAddNewGoal,
        openAllActivities,
        setOpenAllActivities,
        openAddNewActivity,
        setOpenAddNewActivity,
        openEditActivity,
        setOpenEditActivity,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
