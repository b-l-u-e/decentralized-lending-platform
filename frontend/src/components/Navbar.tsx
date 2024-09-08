import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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
    return (
        <Root>
            <CustomAppBar position="static">
                <Toolbar>
                    <Title variant="h6">
                        Decentralized Credit Platform
                    </Title>
                    <CustomButton variant="contained">
                        <Link to="/login">Login</Link>
                    </CustomButton>
                </Toolbar>
            </CustomAppBar>
        </Root>
    );
};

export default Navbar;