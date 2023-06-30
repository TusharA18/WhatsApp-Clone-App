import styled from "styled-components";

const Message = () => {
  return (
    <>
      <Send>
        <TextMessage />
      </Send>
      <Send>
        <TextMessage />
      </Send>
      <Receive>
        <TextMessage />
      </Receive>
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

const TextMessage = () => {
  return (
    <>
      <Text>Hi there, my name is Tushar</Text>
      <Time>{new Date().toString().substring(0, 15)}</Time>
    </>
  );
};

const Text = styled.p`
  font-size: 14px;
  padding: 0 25px 0 5px;
`;

const Time = styled.p`
  font-size: 10px;
  margin-top: auto;
  word-break: keep-all;
  color: #919191;
`;

export default Message;
