import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Button,
  Divider,
  Typography,
  Paper,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useAccount from "../../../hooks/useAccount";

const Home: React.FC = () => {
  const totalDeposited = 700;
  const creditScore = 750;
  const insuranceWorth = 10000;

  const transactions = [
    { id: 1, type: "Deposit", amount: 300, date: "2024-09-01" },
    { id: 2, type: "Withdraw", amount: 200, date: "2024-09-02" },
    { id: 3, type: "Credit", amount: 100, date: "2024-09-03" },
    { id: 4, type: "Payment", amount: 400, date: "2024-09-04" },
  ];

  const { accountBalance } = useAccount();

  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, minHeight: "100vh" }}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 500 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                Wallet Balance
              </Typography>

              <Typography variant="h4" sx={{ width: "400px" }}>
                {accountBalance}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
