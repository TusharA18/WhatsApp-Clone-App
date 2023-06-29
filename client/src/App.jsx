import { useContext } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AccountContext } from "./context/AccountProvider";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  const clientId = import.meta.env.VITE_REACT_CLIENT_ID;

  const { accountUser } = useContext(AccountContext);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      {accountUser || true ? <HomePage /> : <LoginPage />}
    </GoogleOAuthProvider>
  );
};

export default App;
