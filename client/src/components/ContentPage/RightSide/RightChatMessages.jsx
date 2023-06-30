import styled from "styled-components";
import Message from "./Message";
import { useEffect, useRef } from "react";

const RightChatMessages = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, []);

  return (
    <Container ref={scrollRef}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
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

export default RightChatMessages;
