import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import PropTypes from "prop-types";

const ProfileInfo = ({ handleClose }) => {
  const { accountUser } = useContext(AccountContext);

  return (
    <>
      <Header>
        <IconButton onClick={handleClose}>
          <ArrowBackIcon />
        </IconButton>
        <div>
          <h3>Profile</h3>
        </div>
      </Header>
      <Content>
        <Image>
          <Avatar
            src={accountUser?.picture}
            alt="dp"
            style={{ width: 200, height: 200 }}
          />
        </Image>
        <Name>
          <p>Your Name</p>
          <div>
            <p>{accountUser?.name}</p>
            <EditIcon />
          </div>
        </Name>
        <Description>
          <p>
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </p>
        </Description>
        <About>
          <p>About</p>
          <div>
            <p>Urgent calls only</p>
            <EditIcon />
          </div>
        </About>
      </Content>
    </>
  );
};

const Header = styled.div`
  background-color: rgb(0, 128, 105);
  height: 126px;
  width: 100%;
  display: flex;
  align-items: end;
  color: white;

  & > button {
    margin: 10px 20px;
    & > svg {
      color: white;
    }
  }

  & > div > h3 {
    font-size: 19px;
    font-weight: 600;
  }
`;

const Content = styled.div`
  background-color: rgb(240, 242, 245);
  height: 100%;
`;

const Image = styled.div`
  display: flex;
  padding: 20px 0;
  justify-content: center;
`;

const Name = styled.div`
  padding: 5px 30px 0;
  background-color: white;

  & > p {
    font-size: 14px;
    color: rgb(0, 128, 129);
    margin-bottom: 0;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      color: rgb(106, 107, 108);
    }

    & > svg {
      color: rgb(106, 107, 108);
      font-size: 18px;
    }
  }
`;

const Description = styled.div`
  color: rgb(106, 107, 108);
  padding: 15px 30px;

  & > p {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const About = styled.div`
  background-color: white;
  padding: 5px 30px 0;
  background-color: white;

  & > p {
    font-size: 14px;
    color: rgb(0, 128, 129);
    margin-bottom: 0;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > p {
      color: rgb(106, 107, 108);
    }

    & > svg {
      color: rgb(106, 107, 108);
      font-size: 18px;
    }
  }
`;

ProfileInfo.propTypes = {
  handleClose: PropTypes.func,
};

export default ProfileInfo;
