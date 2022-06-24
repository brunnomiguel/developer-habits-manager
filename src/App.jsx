import GlobalStyle from "./styles/global";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";

const App = () => {

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes />
    </>
  );
};

export default App;
