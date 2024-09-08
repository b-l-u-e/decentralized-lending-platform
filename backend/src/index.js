const express = require('express');
const Web3 = require('web3');
const app = express();
const port = 3000;

const web3 = new Web3('http://localhost:8545');
const contractABI = []; // Add ABI here
const contractAddress = '0x...'; // Add contract address here

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.get('/credit-score/:address', async (req, res) => {
    const address = req.params.address;
    const score = await contract.methods.getCreditScore(address).call();
    res.send({ address, score });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});