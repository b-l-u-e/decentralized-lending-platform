import { Web3 } from "web3";
import path from "path";
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";

const web3 = new Web3("http://127.0.0.1:8545/");

// Define __dirname manually for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const abiPath = path.resolve(__dirname, "MyContractAbi.json");
const abi = JSON.parse(readFileSync(abiPath, "utf8"));

const bytecodePath = path.resolve(__dirname, "MyContractBytecode.bin");
const bytecode = readFileSync(bytecodePath, "utf8");


const myContract = new web3.eth.Contract(abi);
myContract.handleRevert = true;

async function deploy() {
    const providersAccounts = await web3.eth.getAccounts();
    const defaultAccount = providersAccounts[0];
    console.log("Deployer account:", defaultAccount);

    const contractDeployer = myContract.deploy({
        data: "0x" + bytecode,
        arguments: [1],
    });

    const gas = await contractDeployer.estimateGas({
        from: defaultAccount,
    });
    console.log("Estimated gas:", gas);

    try {
        const tx = await contractDeployer.send({
            from: defaultAccount,
            gas,
            gasPrice: 10000000000,
        });
        console.log("Contract deployed at address: " + tx.options.address);

        const deployedAddressPath = path.join(__dirname, "MyContractAddress.txt");
        writeFileSync(deployedAddressPath, tx.options.address);
    } catch (error) {
        console.error(error);
    }
}

deploy();