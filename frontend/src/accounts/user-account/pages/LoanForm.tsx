import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const LoanForm: React.FC = () => {
  const [amount, setAmount] = useState<number | string>("");
  const [duration, setDuration] = useState<number>(0);
  const [conversionRate, setConversionRate] = useState<number>(0);
  const [ethAmount, setEthAmount] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the conversion rate from an API (dummy value for now)
    const fetchConversionRate = async () => {
      // Replace with actual API call
      const rate = 0.0000033; // Dummy conversion rate
      setConversionRate(rate);
    };

    fetchConversionRate();
  }, []);

  useEffect(() => {
    // Calculate the ETH amount whenever the amount or conversion rate changes
    setEthAmount(Number(amount) * conversionRate);
  }, [amount, conversionRate]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^0+/, ""); // Remove leading zeros
    setAmount(value === "" ? "" : Number(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    const newLoan = {
      id: Date.now(),
      amount: Number(amount),
      status: "applied",
      dateRequested: new Date().toISOString().split("T")[0],
      medicalFacility: "Facility X", // Replace with actual facility if needed
    };
    // Save the new loan to local storage or state management
    const loans = JSON.parse(localStorage.getItem("loans") || "[]");
    loans.push(newLoan);
    localStorage.setItem("loans", JSON.stringify(loans));
    navigate("/loans");
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Apply for Loan
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Amount (KES)"
                variant="outlined"
                fullWidth
                type="number"
                value={amount}
                onChange={handleAmountChange}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Duration (months)"
                variant="outlined"
                fullWidth
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                Conversion Rate: 1 KES = {conversionRate} ETH
              </Typography>
              <Typography variant="body1">
                Amount in ETH: {ethAmount.toFixed(6)} ETH
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default LoanForm;
