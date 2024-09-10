import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const LendingPoolForm: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<number>(0);
    const [interestRate, setInterestRate] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    const createLoan = async () => {
        // Create loan logic here
        alert('Loan created successfully');
    };

    return (
        <Box>
            <TextField
                label="Loan Amount"
                variant="outlined"
                fullWidth
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                margin="normal"
            />
            <TextField
                label="Interest Rate"
                variant="outlined"
                fullWidth
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                margin="normal"
            />
            <TextField
                label="Duration"
                variant="outlined"
                fullWidth
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={createLoan}>
                Create Loan
            </Button>
        </Box>
    );
};

export default LendingPoolForm;