import { createContext, useState } from "react";

export const AccountContext = createContext(null);

// eslint-disable-next-line
const AccountProvider = ({ children }) => {
  const [accountUser, setAccountUser] = useState();
  const [person, setPerson] = useState();

  return (
    <AccountContext.Provider
      value={{ accountUser, setAccountUser, person, setPerson }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
