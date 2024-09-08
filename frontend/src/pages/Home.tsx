import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Home: React.FC = () => {
    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to the Decentralized Credit Platform
                </Typography>
                <Box mt={2}>
                    <Button variant="contained" color="primary" component={Link} to="/credit-score">
                        Credit Score
                    </Button>
                </Box>
                <Box mt={2}>
                    <Button variant="contained" color="primary" component={Link} to="/loan-repayments">
                        Loan Repayments
                    </Button>
                </Box>
                <Box mt={2}>
                    <Button variant="contained" color="primary" component={Link} to="/lending-pools">
                        Lending Pools
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;