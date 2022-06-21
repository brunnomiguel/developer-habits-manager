import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ModalProvider>{children}</ModalProvider>
    </UserProvider>
  );
};

export default Providers;
