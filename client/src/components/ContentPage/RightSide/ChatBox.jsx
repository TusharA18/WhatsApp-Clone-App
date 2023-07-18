import styled from "styled-components";
import RightChatHeader from "./RightChatHeader";
import RightChatMessages from "./RightChatMessages";
import RightChatBar from "./RightChatBar";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import {
  addMessage,
  getConversation,
  getMessages,
} from "../../../services/api";

const ChatBox = () => {
  const [conversation, setConversation] = useState({});
  const [inputMessage, setInputMessage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [file, setFile] = useState();
  const [image, setImage] = useState("");

  const {
    accountUser,
    person,
    newMessageFlag,
    setNewMessageFlag,
    deleteMessagesFlag,
    socket,
    messages,
    setMessages,
  } = useContext(AccountContext);

  // for getting conversation details
  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: accountUser.sub,
        receiverId: person.sub,
      });

      setConversation(data);
    };

    getConversationDetails();

    setInputMessage("");
  }, [person.sub]); // eslint-disable-line

  // for getting messages
  useEffect(() => {
    const getMessagesDetails = async () => {
      const data = await getMessages(conversation?._id);

      setMessages(data);
    };

    getMessagesDetails();
  }, [conversation?._id, person?.sub, newMessageFlag, deleteMessagesFlag]); // eslint-disable-line

  // for getting real time message send to the other person
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
  }, []); // eslint-disable-line

  // for setting the incoming message to the chatbox
  useEffect(() => {
    incomingMessage &&
      conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);

    setNewMessageFlag((prev) => !prev);
  }, [incomingMessage, conversation]); // eslint-disable-line

  const setKeyCode = async (e) => {
    const code = e.keyCode || e.which;

    const containSpaces = inputMessage.replace(/\s/g, "").length !== 0;

    if (code === 13 && containSpaces) {
      let message;

      if (!file) {
        message = {
          conversationId: conversation?._id,
          senderId: accountUser.sub,
          receiverId: person.sub,
          type: "text",
          text: inputMessage,
        };
      } else {
        message = {
          conversationId: conversation?._id,
          senderId: accountUser.sub,
          receiverId: person.sub,
          type: "file",
          text: image,
        };
      }

      socket.current.emit("sendMessage", message);

      await addMessage(message);

      setInputMessage("");
      setImage("");
      setFile();
      setNewMessageFlag((prev) => !prev);
    }
  };

  return (
    <Container>
      <RightChatHeader conversation={conversation} />
      <RightChatMessages messages={messages} />
      <RightChatBar
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        setKeyCode={setKeyCode}
        file={file}
        setFile={setFile}
        setImage={setImage}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default ChatBox;
