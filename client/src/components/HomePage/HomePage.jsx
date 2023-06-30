import styled from "styled-components";
import EmptyChat from "../ContentPage/RightSide/EmptyChat";
import ChatBox from "../ContentPage/RightSide/ChatBox";
import LeftHeader from "../ContentPage/LeftSide/LeftHeader";
import LeftSearchBar from "../ContentPage/LeftSide/LeftSearchBar";
import LeftChatBar from "../ContentPage/LeftSide/LeftChatBar";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const HomePage = () => {
  const { person } = useContext(AccountContext);

  return (
    <Container>
      <Header />
      <Content>
        <Left>
          <LeftHeader />

          <LeftSearchBar />

          <LeftChatBar />
        </Left>
        <Right>{person ? <ChatBox /> : <EmptyChat />}</Right>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(225, 225, 222);
  overflow: hidden;
`;

const Header = styled.div`
  height: 136px;
  background: rgb(0, 168, 132);
`;

const Content = styled.div`
  background-color: white;
  height: 95vh;
  width: 97vw;
  position: absolute;
  top: 3px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  box-shadow: 0px 0px 10px 0px rgba(147, 139, 139, 0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(147, 139, 139, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(147, 139, 139, 0.75);

  @media (min-width: 1600px) {
    width: 85vw;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;
  border-right: 1px solid lightgray;
`;

const Right = styled.div`
  display: flex;
  flex: 0.7;
`;

export default HomePage;
