import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreditScoreForm from "../../../components/forms/CreditScoreForm";

const CreditScore: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Check Credit Score
        </Typography>
        <CreditScoreForm />
      </Box>
    </Container>
  );
};

export default CreditScore;
