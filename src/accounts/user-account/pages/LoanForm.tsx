import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";
import { Web3 } from "web3";

const LoanForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
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

  const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com");
  //CREATE NEW LOAN
  const contractAddress: string = "0x294F856a57d4481B0dc77dCeB7775BCb49DEF8F4";
  const contractAbi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_dueDate",
          type: "uint256",
        },
      ],
      name: "applyForLoan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "dueDate",
          type: "uint256",
        },
      ],
      name: "LoanApplied",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "LoanRepaid",
      type: "event",
    },
    {
      inputs: [],
      name: "repayLoan",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "checkLoanStatus",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  // Initialize contract instance
  const loanContract = new web3.eth.Contract(contractAbi, contractAddress);

  const wallets = web3.eth.wallet.add(
    "0xf6ec2f8a022aa21ab6cf976fcc37a51e83be6f9fde0c2780b94b706de6d82463"
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading("Applying for loan...", {
      autoClose: 10000,
    });

    try {
      const res = await loanContract.methods
        .applyForLoan(amount, duration)
        .send({ from: wallets[0].address });

      toast.success(`Loan applied successfully: ` + res.transactionHash, {
        autoClose: false,
      });
    } catch (e) {
      toast.error(e.message, {
        autoClose: false,
      });
    }
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
