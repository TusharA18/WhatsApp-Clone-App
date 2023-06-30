import { Avatar } from "@mui/material";
import { useContext } from "react";
import styled from "styled-components";
import { AccountContext } from "../../../context/AccountProvider";

const ChatPerson = ({ user }) => {
  const { setPerson } = useContext(AccountContext);

  const handleTrim = (string) => {
    if (string.length < 40) {
      return string;
    }

    return string.substring(0, 40) + "...";
  };

  const handleClick = () => {
    setPerson(user);
  };

  return (
    <>
      <Conatiner onClick={() => handleClick()}>
        <div className="chatPerson__avatar">
          <Avatar src={user?.picture} />
        </div>
        <div className="chatPerson__details">
          <div>
            <h3>{handleTrim(user?.name)}</h3>
            <p>{new Date().toString().substring(0, 15)}</p>
          </div>
          <p>{handleTrim("hi there my name is ai")}</p>
        </div>
      </Conatiner>
    </>
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

export default ChatPerson;
