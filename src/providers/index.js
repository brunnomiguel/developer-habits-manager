import { ModalProvider } from "./Modal";

const Providers = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default Providers;