import styled from "styled-components";
import ChatPerson from "./ChatPerson";
import { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../services/api";
import { AccountContext } from "../../../context/AccountProvider";

const LeftChatBar = () => {
  const [users, setUsers] = useState([]);

  const { accountUser } = useContext(AccountContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUsers();

      setUsers(response.users);
    };

    fetchUser();
  }, []);

  return (
    <Container>
      {users.map(
        (user) =>
          user.sub !== accountUser.sub && (
            <ChatPerson key={user._id} user={user} />
          )
      )}
    </Container>
  );
};

const Container = styled.div`
  overflow: auto;
`;

export default LeftChatBar;
