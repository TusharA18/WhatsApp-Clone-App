import { Avatar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AccountContext } from "../../../context/AccountProvider";
import { addConversation, getConversation } from "../../../services/api";
import { formatDate } from "../../../../utils/common-utils";
import PropTypes from "prop-types";

const ChatPerson = ({ user }) => {
  const [message, setMessage] = useState({});

  const { accountUser, setPerson, socket, newMessageFlag, deleteMessagesFlag } =
    useContext(AccountContext);

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: accountUser.sub,
        receiverId: user.sub,
      });

      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };

    getConversationDetails();
  }, [newMessageFlag, deleteMessagesFlag]); // eslint-disable-line

  useEffect(() => {
    socket.current.on("getMessage", (userData) => {
      const getConversationDetails = async () => {
        const data = await getConversation({
          senderId: accountUser.sub,
          receiverId: userData.senderId,
        });

        setMessage({ text: data?.message, timestamp: data?.updatedAt });
      };

      accountUser.sub === userData.receiverId &&
        user.sub === userData.senderId &&
        getConversationDetails();
    });
  }, []); // eslint-disable-line

  const handleTrim = (string) => {
    if (string?.length < 40) {
      return string;
    }

    return string?.substring(0, 40) + "...";
  };

  const handleClick = async () => {
    setPerson(user);

    await addConversation({
      senderId: accountUser.sub,
      receiverId: user.sub,
    });
  };

  return (
    <Conatiner onClick={() => handleClick()}>
      <div className="chatPerson__avatar">
        <Avatar src={user?.picture} />
      </div>
      <div className="chatPerson__details">
        <div>
          <h3>{handleTrim(user?.name)}</h3>
          <p>{message?.text && formatDate(message?.timestamp)}</p>
        </div>
        <p>{message?.text && handleTrim(message?.text)}</p>
      </div>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgb(233, 237, 239);

  &:hover {
    cursor: pointer;
    background-color: rgb(240, 242, 245);
  }

  & > .chatPerson__avatar {
    margin-right: 10px;
    margin-left: 7px;
  }

  & > .chatPerson__details {
    width: 100%;

    & > div {
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: -7px;
      margin-bottom: 3px;

      & > h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
        color: rgb(0, 0, 0);
      }

      & > p {
        margin-left: auto;
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: 200;
        color: rgb(84, 101, 111);
        white-space: nowrap;
      }
    }

    & > p {
      margin: 0;
      margin-left: 3px;
      font-size: 14px;
      font-weight: 200;
      color: rgb(84, 101, 111);
    }
  }
`;

ChatPerson.propTypes = {
  user: PropTypes.object,
};

export default ChatPerson;
