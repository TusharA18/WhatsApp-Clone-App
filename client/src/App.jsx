import LoginPage from "./components/LoginPage/LoginPage";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const clientId = import.meta.env.VITE_REACT_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <LoginPage />
    </GoogleOAuthProvider>
  );
};

export default App;
