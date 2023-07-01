import { useContext } from "react";
import styled from "styled-components";
import { AccountContext } from "../../../context/AccountProvider";
import { formatDate } from "../../../../utils/common-utils";

const Message = ({ message }) => {
  const { accountUser } = useContext(AccountContext);

  return (
    <>
      {message.senderId === accountUser.sub ? (
        <Send>
          <TextMessage message={message} />
        </Send>
      ) : (
        <Receive>
          <TextMessage message={message} />
        </Receive>
      )}
    </>
  );
};

const Send = styled.div`
  background-color: rgb(217, 253, 211);
  max-width: 60%;
  width: fit-content;
  display: flex;
  word-break: break-all;
  padding: 0 5px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 12px;
  margin-left: auto;
`;

const Receive = styled.div`
  background-color: white;
  max-width: 60%;
  width: fit-content;
  display: flex;
  word-break: break-all;
  padding: 0 5px;
  margin-left: 10px;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 12px;
`;

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message?.text}</Text>
      <Time>{formatDate(message?.createdAt)}</Time>
    </>
  );
};

const Text = styled.p`
  font-size: 14px;
  padding: 0 10px 0 5px;
`;

const Time = styled.p`
  font-size: 10px;
  margin-top: auto;
  word-break: keep-all;
  white-space: nowrap;
  color: #919191;
`;

export default Message;
