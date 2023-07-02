import styled from "styled-components";
import { GoogleLogin } from "@react-oauth/google";
import decode from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../services/api";

const LoginPage = () => {
  const { setAccountUser } = useContext(AccountContext);

  const handleSuccess = async (res) => {
    const data = decode(res.credential);

    setAccountUser(data);

    await addUser(data);
  };

  const handleError = (res) => {
    console.log(res);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Heading>
          <img src="/images/whatsapp-logo.svg" alt="whatsapp-logo" />
          <h3>WhatsApp Web</h3>
        </Heading>
        <ContentBox>
          <Left>
            <h1>Use WhatsApp on your computer</h1>
            <ul>
              <li>1. Open WhatsApp on your phone</li>
              <li>
                2. Tap <b>Menu</b> or <b>Settings</b> and select{" "}
                <b>Linked Devices</b>{" "}
              </li>
              <li>
                3. Tap on <b>Link a device</b>
              </li>
              <li>4. Point your phone to this screen to capture the QR code</li>
            </ul>
          </Left>
          <Right style={{ postion: "relative" }}>
            <img src="/images/qr-code.jpg" alt="qr-code" />
            <div style={{ position: "absolute" }}>
              <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
            </div>
          </Right>
        </ContentBox>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(225, 225, 222);
  color: white;
  overflow: hidden;
`;

const Header = styled.div`
  height: 245px;
  background: rgb(0, 168, 132);
`;

const Content = styled.div`
  position: absolute;
  top: 6%;
  left: 20%;
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  & > img {
    width: 40px;
    height: 40px;
  }

  & > h3 {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const ContentBox = styled.div`
  height: auto;
  width: 55vw;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(147, 139, 139, 0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(147, 139, 139, 0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(147, 139, 139, 0.75);
  display: flex;
  color: rgb(80, 96, 106);
`;

const Left = styled.div`
  width: 50%;
  padding: 35px;
  margin-left: 20px;

  & > h1 {
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  & > ul {
    list-style-type: none;
    padding: 0;
    padding-left: 10px;

    & > li {
      font-size: 18px;
      margin-top: 5px;
      margin: 25px 0;
    }
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;

  & > img {
    height: 20rem;
    margin: 50px 20px 20px 10px;
  }

  & > div {
    top: 55%;
  }

  @media (min-width: 1600px) {
    & > div {
      top: 57%;
    }

    & > img {
      margin: 20px 20px 20px 10px;
    }
  }
`;

export default LoginPage;
