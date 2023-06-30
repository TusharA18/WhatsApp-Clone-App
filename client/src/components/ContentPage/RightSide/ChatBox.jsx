import styled from "styled-components";
import RightChatHeader from "./RightChatHeader";
import RightChatMessages from "./RightChatMessages";
import RightChatBar from "./RightChatBar";

const ChatBox = () => {
  return (
    <Container>
      <RightChatHeader />
      <RightChatMessages />
      <RightChatBar />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export default ChatBox;
