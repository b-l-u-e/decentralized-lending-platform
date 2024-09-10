import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth-client";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const Root = styled("div")({
  flexGrow: 1,
});

const Title = styled(Typography)({
  flexGrow: 1,
  fontWeight: "bold",
  fontSize: "1.5rem",
});

const CustomAppBar = styled(AppBar)({
  backgroundColor: "#ffffff", // Change the background color
  padding: "0 20px", // Add padding
});

const Navbar: React.FC = () => {
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    logout();
    handleClose();
  };
  return (
    <Root className="bg-white">
      <CustomAppBar position="sticky" className="bg-white">
        <Toolbar>
          <Title variant="h6" className="flex items-center">
            <img src="/images/chainsafe_logo.png" className="w-12 p-2.5" />
            <p className="text-black">
              <i>Swift</i>
            </p>
          </Title>

          <ul className="flex gap-5 mr-5 hidden">
            <li>
              <Button variant="contained" LinkComponent={Link} to="/deposit">
                <div className="flex items-center gap-2.5">
                  <SaveAltIcon /> <span className="text-lg mt-1">Deposit</span>
                </div>
              </Button>
            </li>
            <li>
              <Button
                variant="outlined"
                LinkComponent={Link}
                to="/transfer"
                sx={{ color: "white", border: "1px solid white" }}
              >
                <div className="flex items-center gap-2.5">
                  <SendIcon />{" "}
                  <span className="text-lg py-[1.5px]">Transfer</span>
                </div>
              </Button>
            </li>
          </ul>

          <IconButton onClick={handleMenu} color="inherit">
            <Avatar alt="Profile Avatar" src="/static/images/avatar/1.jpg" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClick()}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </CustomAppBar>
    </Root>
  );
};

export default Navbar;
