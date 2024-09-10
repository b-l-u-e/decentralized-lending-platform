
import express from "express";
import dotenv from "dotenv"
import path from "path"
import { readFileSync } from "fs";
import cors from "cors"
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/api/contractAbi", (req, res) => {
    const abiPath = path.resolve(__dirname, 'MyContractAbi.json');
    const abi = JSON.parse(readFileSync(abiPath, 'utf8'));
    res.json(abi);
})

app.get('/api/contractBytecode', (req, res) => {
    const bytecodePath = path.resolve(__dirname, 'MyContractBytecode.bin');
    const bytecode = readFileSync(bytecodePath, 'utf8');
    const paddingLength = 64 - ((bytecode.length - 2) % 64);
    const modByteCode = bytecode.padEnd(bytecode.length + paddingLength, "0");
    res.json({ modByteCode })
});

app.get('/api/contractAddress', (req, res) => {
    const addressPath = path.resolve(__dirname, 'MyContractAddress.txt');
    const address = readFileSync(addressPath, 'utf8');
    res.json({ address });
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`[server] server running on http://localhost:${process.env.PORT}`);
});