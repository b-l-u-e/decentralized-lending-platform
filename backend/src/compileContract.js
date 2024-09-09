import solc from "solc";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync, writeFileSync } from "fs";

// Define __dirname manually for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up contract details
const contractName = "MyContract";
const fileName = `${contractName}.sol`;

// Read the Solidity source code from the file system
const contractPath = path.resolve(__dirname, `../contracts/${fileName}`);
const sourceCode = readFileSync(contractPath, "utf8");

// solc compiler configuration
const input = {
    language: "Solidity",
    sources: {
        [fileName]: {
            content: sourceCode,
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"],
            },
        },
    },
};

// Compile the Solidity code using solc
const compiledCode = JSON.parse(solc.compile(JSON.stringify(input)));

// Get the bytecode from the compiled contract
const bytecode = compiledCode.contracts[fileName][contractName].evm.bytecode.object;

// Write the bytecode to a new file
const bytecodePath = path.join(__dirname, "MyContractBytecode.bin");
writeFileSync(bytecodePath, bytecode);

// Log the compiled contract bytecode to the console
console.log("Contract Bytecode:\n", bytecode);

// Get the ABI from the compiled contract
const abi = compiledCode.contracts[fileName][contractName].abi;

// Write the Contract ABI to a new file
const abiPath = path.join(__dirname, "MyContractAbi.json");
writeFileSync(abiPath, JSON.stringify(abi, null, 2));

// Log the Contract ABI to the console
console.log("Contract ABI:\n", abi);
