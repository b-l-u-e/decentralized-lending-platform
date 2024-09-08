import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Home: React.FC = () => {
    return (
      
          
            <Container>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to the Decentralized Credit Platform
                    </Typography>
                </Box>
            </Container>
        
    
    );
};

export default Home;