import { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [accountUser, setAccountUser] = useState(null);
  const [person, setPerson] = useState(null);
  const [newMessageFlag, setNewMessageFlag] = useState(true);
  const [deleteMessagesFlag, setDeleteMessagesFlag] = useState(true);
  const [activeUsers, setActiveUsers] = useState([]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io(import.meta.env.VITE_REACT_SERVER_URL);
  }, []);

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
        socket,
        activeUsers,
        setActiveUsers,
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
