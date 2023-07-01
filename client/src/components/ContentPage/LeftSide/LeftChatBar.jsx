import styled from "styled-components";
import ChatPerson from "./ChatPerson";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import PropTypes from "prop-types";

const LeftChatBar = ({ users }) => {
  const { accountUser } = useContext(AccountContext);

  return (
    <Container>
      {users &&
        users.map(
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

LeftChatBar.propTypes = {
  users: PropTypes.array,
};

export default LeftChatBar;
