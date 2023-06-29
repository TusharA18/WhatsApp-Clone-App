import styled from "styled-components";
import LockIcon from "@mui/icons-material/Lock";

const EmptyChat = () => {
  return (
    <Conatiner>
      <img src="/images/empty-chat.png" alt="empty-chat" />
      <p className="first">WhatsApp Web</p>
      <p className="second">
        Send and receive messages without keeping your phone online.
      </p>
      <p className="third">
        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
      </p>
      <p className="fourth">
        <LockIcon /> End-to-end encrypted
      </p>
    </Conatiner>
  );
};

const Conatiner = styled.div`
  background-color: rgb(240, 242, 245);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid rgb(37, 211, 102);
  color: rgb(84, 101, 111);

  & > img {
    width: 40vw;
  }

  & > .first {
    font-size: 32px;
    font-weight: normal;
    margin: 10px 0;
  }

  & > .second {
    margin: 5px 0;
    font-size: 14px;
  }

  & > .third {
    margin: 5px 0;
    font-size: 14px;
  }

  & > .fourth {
    display: flex;
    font-size: 14px;
    margin-top: 100px;
    margin-bottom: -100px;
    color: rgb(134, 150, 160);

    & > svg {
      font-size: 14px;
    }
  }
`;

export default EmptyChat;
