import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

type Loan = {
  id: number;
  amount: number;
  status: 'pending' | 'repaid' | 'applied';
  dateRequested: string;
  dateCompleted?: string;
  medicalFacility: string;
};

const dummyLoans: Loan[] = [
  { id: 1, amount: 5000, status: 'pending', dateRequested: '2023-01-01', medicalFacility: 'Facility A' },
  { id: 2, amount: 10000, status: 'repaid', dateRequested: '2023-02-01', dateCompleted: '2023-03-01', medicalFacility: 'Facility B' },
  { id: 3, amount: 15000, status: 'applied', dateRequested: '2023-03-01', medicalFacility: 'Facility C' },
  { id: 4, amount: 20000, status: 'pending', dateRequested: '2023-04-01', medicalFacility: 'Facility D' },
  { id: 5, amount: 25000, status: 'repaid', dateRequested: '2023-05-01', dateCompleted: '2023-06-01', medicalFacility: 'Facility E' },
];

const Loans: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'repaid' | 'applied'>('all');
  const navigate = useNavigate();

  const handleApplyForLoan = () => {
    navigate('loan-form');
  };

  const renderLoans = () => {
    return dummyLoans
      .filter((loan) => filter === 'all' || loan.status === filter)
      .map((loan) => (
        <Grid item xs={12} key={loan.id}>
          <Card sx={{ marginBottom: 2 }}>
            <CardContent>
              <Typography variant="h6">Loan ID: {loan.id}</Typography>
              <Typography variant="body1">Amount: ${loan.amount}</Typography>
              <Typography variant="body2">Status: {loan.status}</Typography>
              <Typography variant="body2">Date Requested: {loan.dateRequested}</Typography>
              {loan.dateCompleted && <Typography variant="body2">Date Completed: {loan.dateCompleted}</Typography>}
              <Typography variant="body2">Medical Facility: {loan.medicalFacility}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ));
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Loans
        </Typography>
        <Button variant="contained" color="primary" onClick={handleApplyForLoan} sx={{ marginBottom: 4 }}>
          Apply for Loan
        </Button>
        <FormControl fullWidth sx={{ marginBottom: 4 }}>
          <InputLabel id="filter-label">Filter by Status</InputLabel>
          <Select
            labelId="filter-label"
            value={filter}
            label="Filter by Status"
            onChange={(e) => setFilter(e.target.value as 'all' | 'pending' | 'repaid' | 'applied')}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="repaid">Repaid</MenuItem>
            <MenuItem value="applied">Applied</MenuItem>
          </Select>
        </FormControl>
        <Divider sx={{ marginBottom: 4 }} />
        <Grid container spacing={2}>
          {renderLoans()}
        </Grid>
      </Box>
    </Container>
  );
};

export default Loans;