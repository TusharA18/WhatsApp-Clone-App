import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ChatPerson from "../ContentPage/LeftSide/ChatPerson";
import EmptyChat from "../ContentPage/RightSide/EmptyChat";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Left>
          <LeftHeader>
            <div className="leftSide__header">
              <Avatar />
            </div>
            <div className="rightSide__header">
              <IconButton>
                <DonutLargeIcon />
              </IconButton>
              <IconButton>
                <ChatIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </LeftHeader>
          <LeftSearchBar>
            <div className="leftSearchBarConatiner">
              <SearchIcon />
              <input type="text" placeholder="Search or start new chat..." />
            </div>
          </LeftSearchBar>
          <LeftChatBox>
            <ChatPerson />
            <ChatPerson />
            <ChatPerson />
            <ChatPerson />
            <ChatPerson />
          </LeftChatBox>
        </Left>
        <Right>
          <EmptyChat />
        </Right>
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

  @media (min-width: 1600px) {
    width: 85vw;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.3;
  border-right: 1px solid rgb(233, 237, 239);
`;

const LeftHeader = styled.div`
  height: 35px;
  background-color: rgb(240, 242, 245);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid rgb(233, 237, 239);

  & > .rightSide__header {
    & > svg {
      color: rgb(84, 101, 111);
    }

    & > button {
      padding: 14px;
    }
  }
`;

const LeftSearchBar = styled.div`
  height: 50px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .leftSearchBarConatiner {
    background-color: rgb(240, 242, 245);
    width: 92%;
    border-radius: 7px;
    padding: 5px;
    display: flex;
    align-items: center;
    height: 50%;

    & > svg {
      margin-left: 10px;
      font-size: 20px;
    }

    & > input {
      outline: none;
      border: none;
      background-color: inherit;
      margin: 0 15px;
      width: 100%;
      font-size: 14px;
      font-weight: 100;
    }
  }
`;

const LeftChatBox = styled.div`
  overflow: auto;
`;

const Right = styled.div`
  display: flex;
  flex: 0.7;
`;

export default HomePage;
