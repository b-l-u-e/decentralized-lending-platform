import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth-client';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const Root = styled('div')({
    flexGrow: 1,
});

const Title = styled(Typography)({
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: '1.5rem',
});

const CustomAppBar = styled(AppBar)({
    backgroundColor: '#3f51b5', // Change the background color
    padding: '0 20px', // Add padding
});

const CustomButton = styled(Button)({
    marginLeft: 'auto', // Push the button to the right
    backgroundColor: '#ffffff', // Change button background color
    color: '#3f51b5', // Change button text color
    '&:hover': {
        backgroundColor: '#f1f1f1', // Change button hover background color
    },
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

    return (
        <Root>
            <CustomAppBar position="static">
                <Toolbar>
                    <Title variant="h6">
                        Decentralized Credit Platform
                    </Title>
                    <IconButton onClick={handleMenu} color="inherit">
                        <Avatar alt="Profile Avatar" src="/static/images/avatar/1.jpg" />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} to="/profile" onClick={handleClose}>Profile</MenuItem>
                        <MenuItem component={Link} to="/settings" onClick={handleClose}>Settings</MenuItem>
                        <MenuItem onClick={() => { logout(); handleClose(); }}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </CustomAppBar>
        </Root>
    );
};

export default Navbar;