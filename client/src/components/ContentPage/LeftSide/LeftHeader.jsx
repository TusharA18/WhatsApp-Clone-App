import { Avatar, IconButton } from "@mui/material";
import styled from "styled-components";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import LeftHeaderDialog from "./LeftHeaderDialog";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const LeftHeader = () => {
  const { accountUser } = useContext(AccountContext);

  return (
    <Container>
      <div className="leftSide__header">
        <Avatar src={accountUser?.picture} />
      </div>
      <div className="rightSide__header">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <LeftHeaderDialog />
      </div>
    </Container>
  );
};

const Container = styled.div`
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

export default LeftHeader;
