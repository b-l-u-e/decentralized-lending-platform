import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../hooks/use-auth-client";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const Profile: React.FC = () => {
    const { account, profile } = useAuth();
    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate('edit-profile');
    };

    const fullName = `${profile?.firstName || ''} ${profile?.lastName || ''}`.trim();

    return (
        <Container>
            <Box my={4} display="flex" justifyContent="center">
                <Card sx={{ padding: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Profile Details
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="p">
                                    Name
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {fullName || 'Not provided'}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="p">
                                    ENS Name
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {profile?.ensName || 'Not provided'}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="p">
                                    Wallet Address
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {account || 'Not connected'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={handleEditProfile}>
                            Edit Profile
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Container>
    );
};

export default Profile;