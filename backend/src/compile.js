import solc from "solc";
const { compile } = solc;
import path from "path";
import { readFileSync, writeFileSync } from "fs";

const { join } = path
const contractName = "MyContract";
const fileName = `${contractName}.sol`;

// Read the Solidity source code from the file system
const contractPath = join(__dirname, fileName);
const sourceCode = readFileSync(contractPath, "utf8");

// solc compiler config
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
const compiledCode = JSON.parse(compile(JSON.stringify(input)));

// Get the bytecode from the compiled contract
const bytecode =
    compiledCode.contracts[fileName][contractName].evm.bytecode.object;

// Write the bytecode to a new file
const bytecodePath = join(__dirname, "MyContractBytecode.bin");
writeFileSync(bytecodePath, bytecode);

// Log the compiled contract code to the console
console.log("Contract Bytecode:\n", bytecode);

// Get the ABI from the compiled contract
const abi = compiledCode.contracts[fileName][contractName].abi;

// Write the Contract ABI to a new file
const abiPath = join(__dirname, "MyContractAbi.json");
writeFileSync(abiPath, JSON.stringify(abi, null, "\t"));

// Log the Contract ABI to the console
console.log("Contract ABI:\n", abi);