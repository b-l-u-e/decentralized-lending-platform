import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LendingPoolForm from "../../../components/forms/LendingPoolForm";
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

const LendingPools: React.FC = () => {
  interface Pool {
    id: number;
    amount: number;
    interestRate: number;
    duration: number;
  }

  const [pools, setPools] = useState<Pool[]>([]);

  useEffect(() => {
    // Fetch existing lending pools logic here
    const fetchPools = async () => {
      // Placeholder data
      const data: Pool[] = [
        { id: 1, amount: 1000, interestRate: 5, duration: 12 },
        { id: 2, amount: 2000, interestRate: 7, duration: 24 },
      ];
      setPools(data);
    };

    fetchPools();
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lending Pools
        </Typography>
        <LendingPoolForm />
        <Typography variant="h5" component="h2" gutterBottom>
          Existing Lending Pools
        </Typography>
        <List>
          {pools.map((pool) => (
            <StyledListItem key={pool.id}>
              <ListItemText
                primary={`Amount: ${pool.amount}, Interest Rate: ${pool.interestRate}%, Duration: ${pool.duration} months`}
              />
            </StyledListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default LendingPools;
