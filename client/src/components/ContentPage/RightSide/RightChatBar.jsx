import styled from "styled-components";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";

const RightChatBar = () => {
  return (
    <Container>
      <IconButton>
        <EmojiEmotionsOutlinedIcon />
      </IconButton>
      <IconButton className="rightChatBar__attachFile">
        <AttachFileIcon />
      </IconButton>
      <MessageBar>
        <input type="text" placeholder="Type a message..." />
      </MessageBar>
      <IconButton className="rightChatBar__MicIcon">
        <MicIcon />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(240, 242, 245);
  height: 56px;
  display: flex;
  padding-left: 10px;

  & > button > svg {
    font-size: 25px;
  }

  & > .rightChatBar__attachFile {
    transform: rotate(30deg);
  }

  & > input {
    width: 100%;
  }

  & > .rightChatBar__MicIcon {
    margin-right: 10px;
  }

  @media (min-width: 1600px) {
    height: 51px;
  }
`;

const MessageBar = styled.div`
  width: calc(95%);
  display: flex;
  align-items: center;
  margin-right: 5px;

  & > input {
    width: 100%;
    outline: none;
    border: none;
    height: 30px;
    border-radius: 10px;
    padding: 5px;
    padding-left: 15px;
    font-size: 14px;
  }
`;

export default RightChatBar;
