import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoanRepaymentForm from "../../../components/forms/LoanRepaymentForm";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const StyledListItem = styled(ListItem)({
  backgroundColor: "#f5f5f5",
  marginBottom: "10px",
  borderRadius: "4px",
  padding: "10px",
});

const LoanRepayments: React.FC = () => {
  interface Loan {
    id: number;
    amount: number;
    interestRate: number;
    duration: number;
    repaid: boolean;
  }

  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    // Fetch existing loans logic here
    const fetchLoans = async () => {
      // Placeholder data
      const data: Loan[] = [
        { id: 1, amount: 1000, interestRate: 5, duration: 12, repaid: false },
        { id: 2, amount: 2000, interestRate: 7, duration: 24, repaid: false },
      ];
      setLoans(data);
    };

    fetchLoans();
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Loan Repayments
        </Typography>
        <LoanRepaymentForm />
        <Typography variant="h5" component="h2" gutterBottom>
          Existing Loans
        </Typography>
        <List>
          {loans.map((loan) => (
            <StyledListItem key={loan.id}>
              <ListItemText
                primary={`Amount: ${loan.amount}, Interest Rate: ${loan.interestRate
                  }%, Duration: ${loan.duration} months, Repaid: ${loan.repaid ? "Yes" : "No"
                  }`}
              />
            </StyledListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default LoanRepayments;
