import { Drawer } from "@mui/material";
import ProfileInfo from "./ProfileInfo";
import PropTypes from "prop-types";

const DrawerStyle = {
  top: 21,
  left: 22,
  height: "94.9%",
  width: "29.2%",
  transition: "0.5ms all ease-in",
  boxShadow: 0,
  "@media(min-width: 1600px)": {
    left: 140,
    top: 25,
    width: "25.7%",
    height: "95.1%",
  },
};

const ProfileInfoDrawer = ({ openDrawer, setOpenDrawer }) => {
  const handleClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Drawer
      open={openDrawer}
      PaperProps={{ sx: DrawerStyle }}
      onClose={handleClose}
      hideBackdrop
    >
      <ProfileInfo handleClose={handleClose} />
    </Drawer>
  );
};

ProfileInfoDrawer.propTypes = {
  openDrawer: PropTypes.bool,
  setOpenDrawer: PropTypes.func,
};

export default ProfileInfoDrawer;
