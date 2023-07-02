import { Avatar, IconButton } from "@mui/material";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import RightHeaderDialog from "./RigthHeaderDialog";
import PropTypes from "prop-types";

const RightChatHeader = ({ conversation }) => {
  const { person, activeUsers } = useContext(AccountContext);

  return (
    <Container>
      <Details>
        <div className="rightChatHeader__avatar">
          <Avatar src={person?.picture} />
        </div>
        <div className="rightChatHeader__details">
          <h3>{person?.name}</h3>
          <p>
            {activeUsers.find((user) => user.sub === person.sub)
              ? "Online"
              : "Offline"}
          </p>
        </div>
      </Details>
      <Buttons>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <RightHeaderDialog conversation={conversation} />
      </Buttons>
    </Container>
  );
};

const Container = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(240, 242, 245);
  padding: 15px;
  border-bottom: 1px solid rgb(233, 237, 239);
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  color: rgb(84, 101, 111);

  & > .rightChatHeader__avatar {
    margin-right: 15px;
  }

  & > .rightChatHeader__details {
    & > h3 {
      margin-bottom: 4px;
      font-size: 16px;
      font-weight: normal;
    }

    & > p {
      margin-top: 4px;
      font-size: 12px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;

  & > button {
    padding: 10px;
    margin: 0 5px;

    & > svg {
      font-size: 24px;
      color: rgb(84, 101, 111);
    }
  }
`;

RightChatHeader.propTypes = {
  conversation: PropTypes.object,
};

export default RightChatHeader;
