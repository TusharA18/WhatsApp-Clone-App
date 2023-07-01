import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AccountContext = createContext(null);

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

AccountProvider.propTypes = {
  children: PropTypes.object,
};

export default AccountProvider;
