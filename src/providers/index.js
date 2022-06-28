import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";
import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./Groups";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>
        <HabitsProvider>
          <GroupsProvider>{children}</GroupsProvider>
        </HabitsProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default Providers;
