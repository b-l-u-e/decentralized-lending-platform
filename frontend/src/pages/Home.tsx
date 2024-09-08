import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Home: React.FC = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ flexGrow: 1, padding: 4, minHeight: "100vh" }}
    >
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" color="textSecondary" gutterBottom>
          Welcome to the Decentralized Credit Platform
        </Typography>
      </Box>

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
