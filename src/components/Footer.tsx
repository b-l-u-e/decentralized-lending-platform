import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const FooterAppBar = styled(AppBar)({
    top: 'auto',
    bottom: 0,
    left: 0,
    position: 'fixed',
    width: '100%',
    backgroundColor: '#3f51b5', // Same background color as Navbar
    padding: '10px 20px', // Add padding
});

const FooterToolbar = styled(Toolbar)({
    justifyContent: 'center',
});

const FooterText = styled(Typography)({
    color: '#ffffff', // Same text color as Navbar button
    fontSize: '0.875rem', // Adjust font size
});

const Footer: React.FC = () => {
    return (
        <FooterAppBar position="static">
            <FooterToolbar>
                <FooterText variant="body1">
                    © 2023 Decentralized Credit Platform
                </FooterText>
            </FooterToolbar>
        </FooterAppBar>
    );
};

export default Footer;