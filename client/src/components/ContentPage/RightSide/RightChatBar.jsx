import styled from "styled-components";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { AccountContext } from "../../../context/AccountProvider";

const RightChatBar = ({ inputMessage, setInputMessage, setKeyCode }) => {
  const { showPicker, setShowPicker } = useContext(AccountContext);

  return (
    <Container>
      <IconButton onClick={() => setShowPicker(!showPicker)}>
        <EmojiEmotionsOutlinedIcon />
      </IconButton>
      {showPicker && (
        <div className="pickerContainer">
          <Picker
            data={data}
            previewPosition="none"
            theme="light"
            onEmojiSelect={(e) => setInputMessage((prev) => prev + e.native)}
          />
        </div>
      )}
      <IconButton
        className="rightChatBar__attachFile"
        onClick={() => setShowPicker(false)}
      >
        <AttachFileIcon />
      </IconButton>
      <MessageBar onClick={() => setShowPicker(false)}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => setKeyCode(e)}
        />
      </MessageBar>
      <IconButton
        className="rightChatBar__MicIcon"
        onClick={() => setShowPicker(false)}
      >
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

  & > button {
    cursor: pointer;

    & > svg {
      font-size: 25px;
    }
  }

  & > .pickerContainer {
    position: absolute;
    bottom: 9%;
  }

  & > .rightChatBar__attachFile {
    transform: rotate(30deg);
  }

  & > input {
    width: 100%;
  }

  & > .rightChatBar__MicIcon {
    margin-right: 10px;

    & > .pickerContainer {
      position: absolute;
      bottom: 7%;
    }
  }

  @media (min-width: 1600px) {
    height: 51px;

    & > .pickerContainer {
      position: absolute;
      bottom: 7%;
    }
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

RightChatBar.propTypes = {
  inputMessage: PropTypes.string,
  setInputMessage: PropTypes.func,
  setKeyCode: PropTypes.func,
};

export default RightChatBar;
