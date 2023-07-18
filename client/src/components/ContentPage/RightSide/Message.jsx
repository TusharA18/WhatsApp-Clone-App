import { useContext } from "react";
import styled from "styled-components";
import { AccountContext } from "../../../context/AccountProvider";
import { downloadMedia, formatDate } from "../../../../utils/common-utils";
import PropTypes from "prop-types";
import DownloadIcon from "@mui/icons-material/Download";
import { IconButton } from "@mui/material";

const Message = ({ message }) => {
  const { accountUser } = useContext(AccountContext);

  return (
    <>
      {message.senderId === accountUser.sub ? (
        <Send>
          {message.type === "file" ? (
            <FileMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Send>
      ) : (
        <Receive>
          {message.type === "file" ? (
            <FileMessage message={message} />
          ) : (
            <TextMessage message={message} />
          )}
        </Receive>
      )}
    </>
  );
};

const Send = styled.div`
  background-color: rgb(217, 253, 211);
  max-width: 60%;
  width: fit-content;
  display: flex;
  word-break: break-all;
  padding: 0 5px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 12px;
  margin-left: auto;
`;

const Receive = styled.div`
  background-color: white;
  max-width: 60%;
  width: fit-content;
  display: flex;
  word-break: break-all;
  padding: 0 5px;
  margin-left: 10px;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 12px;
`;

const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message?.text}</Text>
      <Time>{formatDate(message?.createdAt)}</Time>
    </>
  );
};

const Text = styled.p`
  font-size: 14px;
  padding: 0 10px 0 5px;
`;

const Time = styled.p`
  font-size: 10px;
  margin-top: auto;
  word-break: keep-all;
  white-space: nowrap;
  color: #919191;
`;

const FileMessage = ({ message }) => {
  return (
    <FileContainer>
      {message?.text?.includes(".pdf") || message?.text?.includes(".txt") ? (
        <FileFormat>
          <FileFormatImage
            src={
              message?.text?.includes(".pdf")
                ? "/images/pdf-icon.png"
                : "/images/txt-file.png"
            }
            alt={message?.text?.includes(".pdf") ? "PDF File" : "Text File"}
          />
          <FileFormatText>{message?.text?.split("-").pop()}</FileFormatText>
        </FileFormat>
      ) : (
        <Image src={message?.text} alt={message?.text} />
      )}

      <FileContent>
        <IconButton onClick={(e) => downloadMedia(e, message.text)}>
          <DownloadIcon />
        </IconButton>
        <FileTime>{formatDate(message?.createdAt)}</FileTime>
      </FileContent>
    </FileContainer>
  );
};

const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 10px 5px;
  padding-bottom: 0px;
  border-radius: 15px;
`;

const FileContent = styled.div`
  display: flex;
  align-items: center;

  & > button > svg {
    font-size: 20px;
  }
`;

const FileTime = styled.p`
  font-size: 10px;
  color: #919191;
  margin-left: auto;
  margin-right: 5px;
`;

const FileFormat = styled.div`
  display: flex;
`;

const FileFormatImage = styled.img`
  width: 100px;
  height: 100px;
  padding: 10px;
`;

const FileFormatText = styled.p`
  margin-right: 10px;
`;

Message.propTypes = {
  message: PropTypes.object,
};

TextMessage.propTypes = {
  message: PropTypes.object,
};

FileMessage.propTypes = {
  message: PropTypes.object,
};

export default Message;
