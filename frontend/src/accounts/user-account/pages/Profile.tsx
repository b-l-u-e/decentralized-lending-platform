import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAuthClient } from "../../../hooks/use-auth-client"

const Profile: React.FC = () => {
    const { account } = useAuthClient();

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Profile Details
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Wallet Address
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    {account || 'Not connected'}
                </Typography>
            </Box>
        </Container>
    );
};

export default Profile;