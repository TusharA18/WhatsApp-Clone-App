import { Avatar, IconButton } from "@mui/material";
import styled from "styled-components";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import LeftHeaderDialog from "./LeftHeaderDialog";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import ProfileInfoDrawer from "./ProfileInfoDrawer";

const LeftHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { accountUser } = useContext(AccountContext);

  const handleToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Container>
      <div className="leftSide__header" onClick={handleToggle}>
        <Avatar src={accountUser?.picture} />
      </div>
      <div className="rightSide__header">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <LeftHeaderDialog setOpenDrawer={setOpenDrawer} />
      </div>
      <ProfileInfoDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
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

  & > .leftSide__header {
    cursor: pointer;
  }

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
