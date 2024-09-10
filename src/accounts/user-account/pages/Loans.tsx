import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Web3 } from "web3";
import useAccount from "../../../hooks/useAccount";
import { toast } from "react-toastify";

type Loan = {
  isPaid: boolean;
  amount: number;
};

const Loans: React.FC = () => {
  const { account } = useAccount();
  const [filter, setFilter] = useState<
    "all" | "pending" | "repaid" | "applied"
  >("all");
  const navigate = useNavigate();
  const [loans, setLoans] = useState<Loan[]>([]);
  const handleApplyForLoan = () => {
    navigate("loan-form");
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

  const checkStatus = async () => {
    try {
      const status = await loanContract.methods
        .checkLoanStatus()
        .call({ from: wallets[0].address });
      setLoans((prev) => [
        ...prev,
        { isPaid: status[0], amount: Number(status[1]) },
      ]);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  <Grid item xs={12}>
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">Loan ID: </Typography>
        <Typography variant="body1">Amount: </Typography>
        <Typography variant="body2">Status: </Typography>
        <Typography variant="body2">Date Requested:</Typography>
        <Typography variant="body2">Medical Facility:</Typography>
      </CardContent>
    </Card>
  </Grid>;

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Loans
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleApplyForLoan}
          sx={{ marginBottom: 4 }}
        >
          Apply for Loan
        </Button>
        <FormControl fullWidth sx={{ marginBottom: 4, display: "none" }}>
          <InputLabel id="filter-label">Filter by Status</InputLabel>
          <Select
            labelId="filter-label"
            value={filter}
            label="Filter by Status"
            onChange={(e) =>
              setFilter(
                e.target.value as "all" | "pending" | "repaid" | "applied"
              )
            }
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="repaid">Repaid</MenuItem>
            <MenuItem value="applied">Applied</MenuItem>
          </Select>
        </FormControl>
        <Divider sx={{ marginBottom: 4 }} />
        <Grid container spacing={2}>
          <table className="w-full border ">
            <thead className="border">
              <tr>
                <th className="p-2.5">#</th>
                <th>Address</th>
                <th>Amount</th>
                <th>isSettled</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {loans.map((loan, index) => (
                <tr key={index} className="border">
                  <td className="p-2.5">{index + 1}</td>
                  <td>{account}</td>
                  <td>{loan.amount}</td>
                  <td>{loan.isPaid ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Grid>
      </Box>
    </Container>
  );
};

export default Loans;
