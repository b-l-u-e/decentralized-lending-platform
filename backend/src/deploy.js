import { Web3 } from "web3";
import { join } from "path";
import { readFileSync, writeFileSync } from "fs";
import abi from "./MyContractAbi.json";

const web3 = new Web3("http://127.0.0.1:8545/");

const bytecodePath = join(__dirname, "MyContractBytecode.bin");
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

        const deployedAddressPath = join(__dirname, "MyContractAddress.txt");
        writeFileSync(deployedAddressPath, tx.options.address);
    } catch (error) {
        console.error(error);
    }
}

deploy();