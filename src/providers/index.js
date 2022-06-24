import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";
import { HabitsProvider } from "./Habits";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>
        <HabitsProvider>{children}</HabitsProvider>
      </ModalProvider>
    </UserProvider>
  );
};

export default Providers;
