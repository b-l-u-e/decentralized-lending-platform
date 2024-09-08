import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const LoanRepaymentForm: React.FC = () => {
    const [loanId, setLoanId] = useState<number>(0);

    const repayLoan = async () => {
        // Repay loan logic here
        alert('Loan repaid successfully');
    };

    return (
        <Box>
            <TextField
                label="Loan ID"
                variant="outlined"
                fullWidth
                value={loanId}
                onChange={(e) => setLoanId(Number(e.target.value))}
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={repayLoan}>
                Repay Loan
            </Button>
        </Box>
    );
};

export default LoanRepaymentForm;