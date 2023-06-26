import { createContext, useState } from "react";

export const AccountContext = createContext(null);

// eslint-disable-next-line
const AccountProvider = ({ children }) => {
  const [accountUser, setAccountUser] = useState();

  return (
    <AccountContext.Provider value={{ accountUser, setAccountUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
