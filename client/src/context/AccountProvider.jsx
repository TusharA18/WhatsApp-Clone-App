import { createContext, useState } from "react";

export const AccountContext = createContext(null);

// eslint-disable-next-line
const AccountProvider = ({ children }) => {
  const [accountUser, setAccountUser] = useState(null);
  const [person, setPerson] = useState(null);
  const [newMessageFlag, setNewMessageFlag] = useState(true);
  const [deleteMessagesFlag, setDeleteMessagesFlag] = useState(true);

  return (
    <AccountContext.Provider
      value={{
        accountUser,
        setAccountUser,
        person,
        setPerson,
        newMessageFlag,
        setNewMessageFlag,
        deleteMessagesFlag,
        setDeleteMessagesFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
