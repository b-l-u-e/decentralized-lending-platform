import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CreditScoreForm: React.FC = () => {
    const [address, setAddress] = useState<string>('');
    const [score, setScore] = useState<number | null>(null);

    const getCreditScore = async () => {
        // Fetch credit score logic here
        setScore(750); // Placeholder score
    };

    return (
        <Box>
            <TextField
                label="Ethereum Address"
                variant="outlined"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={getCreditScore}>
                Get Credit Score
            </Button>
            {score !== null && (
                <Typography variant="h6" component="p" gutterBottom>
                    Credit Score: {score}
                </Typography>
            )}
        </Box>
    );
};

export default CreditScoreForm;