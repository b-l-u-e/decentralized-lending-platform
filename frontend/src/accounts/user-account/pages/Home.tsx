import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Box, Button, Divider, Typography, Paper, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Home: React.FC = () => {
  const totalAmount = 1200;
  const totalTransacted = 500;
  const totalDeposited = 700;
  const creditScore = 750;
  const insuranceWorth = 10000;

  const transactions = [
    { id: 1, type: 'Deposit', amount: 300, date: '2024-09-01' },
    { id: 2, type: 'Withdraw', amount: 200, date: '2024-09-02' },
    { id: 3, type: 'Credit', amount: 100, date: '2024-09-03' },
    { id: 4, type: 'Payment', amount: 400, date: '2024-09-04' }
  ];
  return (
    <Container
      maxWidth="lg"
      sx={{ flexGrow: 1, padding: 4, minHeight: "100vh" }}
    >

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 250 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Wallet Balance
              </Typography>

              <Typography variant="h3">
                {totalTransacted}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Wallet Balance
              </Typography>

              <Typography variant="h3">
                {totalDeposited}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Wallet Balance
              </Typography>

              <Typography variant="h3">
                {creditScore}
              </Typography>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Wallet Balance
              </Typography>

              <Typography variant="h3">
                {insuranceWorth}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


      <Card sx={{ p: "20px" }}>
        <Typography variant="h5" gutterBottom>
          Transaction History
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>${transaction.amount}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              marginBottom: 4,
              textAlign: "center",
              background: "background.paper",
              padding: 3,
              borderRadius: 1,
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Check Your Credit Score
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Get your decentralized credit score based on blockchain activity.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                padding: 1.5,
                fontSize: "1rem",
                marginTop: 2,
              }}
              component={Link}
              to="/credit-score"
            >
              Check Credit Score
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              marginBottom: 4,
              textAlign: "center",
              background: "background.paper",
              padding: 3,
              borderRadius: 1,
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Create a Lending Pool
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Provide loans and earn interest in a decentralized manner.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                padding: 1.5,
                fontSize: "1rem",
                marginTop: 2,
              }}
              component={Link}
              to="/lending-pools"
            >
              Create Lending Pool
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              marginBottom: 4,
              textAlign: "center",
              background: "background.paper",
              padding: 3,
              borderRadius: 1,
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Repay Your Loan
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Repay your loans easily and securely.
            </Typography>
            <Divider sx={{ margin: "16px 0" }} />
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
                padding: 1.5,
                fontSize: "1rem",
                marginTop: 2,
              }}
              component={Link}
              to="/loan-repayments"
            >
              Repay Loan
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
