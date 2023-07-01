import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem, styled } from "@mui/material";
import { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { deleteAllMessages } from "../../../services/api";
import PropTypes from "prop-types";

const RightHeaderDialog = ({ conversation }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { deleteMessagesFlag, setDeleteMessagesFlag } =
    useContext(AccountContext);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    await deleteAllMessages({ conversationId: conversation._id });

    setDeleteMessagesFlag(!deleteMessagesFlag);
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
            handleDelete();
          }}
        >
          Delete All Messages
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

RightHeaderDialog.propTypes = {
  conversation: PropTypes.object,
};

export default RightHeaderDialog;
