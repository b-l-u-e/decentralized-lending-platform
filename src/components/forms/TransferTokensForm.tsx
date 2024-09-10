import React, { useState } from "react";
import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";
import { ethers } from "ethers";
import Web3 from "web3";
import { ZkSyncPlugin } from "@chainsafe/web3-plugin-zksync";
import { useAuth } from "../../hooks/use-auth-client";

function TokenTransferForm() {
  const { account } = useAuth();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [error, setError] = useState("");

  const handleTransfer = async () => {
    setLoading(true);
    setError("");
    setTransactionHash("");

    try {
      // Initialize web3 with the zkSync plugin
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable(); // Request account access if needed
      web3.zksync.initialize();

      // Define the transfer details
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0];

      const tokenAmount = ethers.utils.parseEther(amount); // Convert to wei

      // Transfer tokens using web3.zksync.transfer()
      const receipt = await web3.zksync.transfer({
        from: sender,
        to: recipient,
        value: tokenAmount,
        gasLimit: 21000,
        gasPrice: await web3.eth.getGasPrice(),
      });

      // Set transaction hash and clear fields
      setTransactionHash(receipt.transactionHash);
      setRecipient("");
      setAmount("");
    } catch (error) {
      console.error("Transfer failed:", error);
      setError("Transfer failed. Please check the recipient address and amount.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", padding: 3, textAlign: "center" }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Transfer Tokens
      </Typography>

      {/* Recipient Address Input */}
      <TextField
        label="Sender Address"
        variant="outlined"
        fullWidth
        value={account}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Recipient Address"
        variant="outlined"
        fullWidth
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      {/* Amount Input */}
      <TextField
        label="Amount (ETH)"
        variant="outlined"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleTransfer}
        disabled={loading || !recipient || !amount}
        sx={{ marginBottom: 2 }}
        fullWidth
      >
        {loading ? <CircularProgress size={24} /> : "Transfer"}
      </Button>

      {/* Display Transaction Hash */}
      {transactionHash && (
        <Typography sx={{ color: "green", marginTop: 2 }}>
          Transaction successful! Hash: {transactionHash}
        </Typography>
      )}

      {/* Display Error */}
      {error && (
        <Typography sx={{ color: "red", marginTop: 2 }}>{error}</Typography>
      )}
    </Box>
  );
}

export default TokenTransferForm;
