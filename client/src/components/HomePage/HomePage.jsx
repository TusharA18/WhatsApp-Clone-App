import styled from "styled-components";
import EmptyChat from "../ContentPage/RightSide/EmptyChat";
import ChatBox from "../ContentPage/RightSide/ChatBox";
import LeftHeader from "../ContentPage/LeftSide/LeftHeader";
import LeftSearchBar from "../ContentPage/LeftSide/LeftSearchBar";
import LeftChatBar from "../ContentPage/LeftSide/LeftChatBar";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { getUsers } from "../../services/api";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");

  const { accountUser, person, socket, setActiveUsers } =
    useContext(AccountContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUsers();

      const filterResponse = response.filter((user) =>
        user?.name?.toLowerCase()?.includes(text?.toLowerCase())
      );

      setUsers(filterResponse);
    };

    fetchUser();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", accountUser);

    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);

      const fetchUser = async () => {
        const response = await getUsers();

        setUsers(response);
      };

      fetchUser();
    });
  }, [accountUser]); // eslint-disable-line

  return (
    <Container>
      <Header />
      <Content>
        <Left>
          <LeftHeader />

          <LeftSearchBar text={text} setText={setText} />

          <LeftChatBar users={users} />
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
