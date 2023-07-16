import styled from "styled-components";
import Message from "./Message";
import { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { AccountContext } from "../../../context/AccountProvider";

const RightChatMessages = ({ messages }) => {
  const { setShowPicker } = useContext(AccountContext);

  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ block: "center", behaviour: "auto" });
  }, [messages]);

  return (
    <Container onClick={() => setShowPicker(false)}>
      {messages &&
        messages.map((message) => (
          <div key={v4()} ref={scrollRef}>
            <Message message={message} />
          </div>
        ))}
    </Container>
  );
};

const Container = styled.div`
  background-image: url("/images/background-image.png");
  background-position: center;
  background-size: contain;
  height: 79vh;
  overflow-y: auto;

  @media (min-width: 1600px) {
    height: 83vh;
  }
`;

RightChatMessages.propTypes = {
  messages: PropTypes.array,
};

export default RightChatMessages;
