import React, { useState } from "react";
import { Box, Button, TextField, Typography, CircularProgress, Alert } from "@mui/material";
import Web3 from "web3";

const DepositForm = () => {
    const [amount, setAmount] = useState("");
    const [account, setAccount] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleAccountChange = (e) => {
        setAccount(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            if (!window.ethereum) {
                throw new Error("MetaMask is not installed!");
            }

            const web3 = new Web3(window.ethereum);
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            const userAccount = accounts[0];

            const weiAmount = web3.utils.toWei(amount, "ether");

            await web3.eth.sendTransaction({
                from: userAccount,
                to: account,
                value: weiAmount,
            });

            setSuccessMessage(`Successfully deposited ${amount} ETH to ${account}`);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, margin: "0 auto", mt: 4 }}
        >
            <Typography variant="h5" gutterBottom>
                Deposit Ethereum
            </Typography>

            <TextField
                label="Amount in ETH"
                variant="outlined"
                type="number"
                value={amount}
                onChange={handleAmountChange}
                required
                fullWidth
            />

            <TextField
                label="Recipient Account Address"
                variant="outlined"
                value={account}
                onChange={handleAccountChange}
                required
                fullWidth
            />

            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Deposit"}
            </Button>

            {error && <Alert severity="error">{error}</Alert>}
            {successMessage && <Alert severity="success">{successMessage}</Alert>}
        </Box>
    );
};

export default DepositForm;
