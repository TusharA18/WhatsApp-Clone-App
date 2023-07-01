import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import PropTypes from "prop-types";

const LeftHeaderDialog = ({ setOpenDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { setAccountUser, setPerson } = useContext(AccountContext);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAccountUser();
    setPerson();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuOption>
        <MenuOption
          onClick={() => {
            handleClose();
            handleLogout();
          }}
        >
          Logout
        </MenuOption>
      </Menu>
    </>
  );
};

const MenuOption = styled(MenuItem)`
  font-size: 16px;
  padding: 15px 50px 7px 20px;
  color: #4a4a4a;
`;

LeftHeaderDialog.propTypes = {
  setOpenDrawer: PropTypes.func,
};

export default LeftHeaderDialog;
