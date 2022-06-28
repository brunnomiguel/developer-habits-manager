import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";
import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>
        <HabitsProvider>
          <GroupsProvider>
            <GoalsProvider>{children}</GoalsProvider>
          </GroupsProvider>
        </HabitsProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default Providers;
