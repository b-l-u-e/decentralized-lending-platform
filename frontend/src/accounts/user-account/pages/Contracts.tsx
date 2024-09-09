import { Button, Typography } from "@mui/material";
import { walletPlugin, zksyncPlugin } from "../../../plugins/web3";
import axios from "axios"
import { useEffect, useState } from "react";
import Web3, { Contract, ContractAbi, Bytes } from "web3";
import { ContractFactory } from "web3-plugin-zksync";

const web3 = new Web3("http://127.0.0.1:8545/");
export default function MyContracts() {

    const [contractAddress, setContractAddress] = useState("");
    const [contractAbi, setAbi] = useState<ContractAbi>([]);
    const [contractBytecode, setCode] = useState("");

    const getContractAddress = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/contractAddress");
            setContractAddress(response.data.address)
        } catch (e) {
            console.log(e)
        }
    }
    const getContractAbi = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/contractAbi");
            setAbi(response.data)
        } catch (e) {
            console.log(e)
        }
    }
    const getContractBytecode = async () => {
        try {
            const response = await axios.get("http://localhost:4000/api/contractBytecode");
            setCode(response.data.bytecode)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getContractAbi()
        getContractAddress()
        getContractBytecode()
    }, [])

    const deployContract = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            const defaultAccount = accounts[0];

            //const myContract = new web3.eth.Contract(contractAbi);
            //Deploy the contract
            /*const deployedContract = await myContract.deploy({
                data: contractBytecode,
                arguments: []
            }).send({
                from: defaultAccount,
                gas: "1500000",
                gasPrice: "2000000000"
            })

            console.log(deployedContract);*/
            const contractFactory: ContractFactory<ContractAbi> = new ContractFactory(
                contractAbi,
                contractBytecode,
                walletPlugin
            )

            const contract: Contract<ContractAbi> = await contractFactory.deploy([64], {
                customData: { salt: "salt" },
            });

            console.log(contract)
        } catch (e) {
            console.log(e)
        }
    }

    const testContract = async () => {
        try {
            const accounts = await web3.eth.getAccounts();
            const defaultAccount = accounts[0];

            const myContract = new web3.eth.Contract(contractAbi, contractAddress);


            const num = await myContract.methods.myNumber().call();
            console.log('Original number:' + num);

            const receipt = await myContract.methods
                .setMyNumber(BigInt(num) + 1n)
                .send({
                    from: defaultAccount,
                    gas: (1000000).toString(),
                    gasPrice: "10000000000",
                });
            console.log(receipt)
            console.log("Transaction Hash: " + receipt.transactionHash);

            // Get the updated value of my number
            const myNumberUpdated = await myContract.methods.myNumber().call();
            console.log("myNumber updated value: " + myNumberUpdated);
        } catch (e) {
            console.log(e)
        }
    }


    return <main className="p-2.5 space-y-2.5">

        <div className="flex items-center gap-5">
            <Typography variant="h4" component="h1" gutterBottom>
                <strong>My Contracts</strong>
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={deployContract}
                sx={{ p: 1.5 }}
            >
                Deploy new Contract
            </Button>
        </div>

        <Typography variant="h5" component="div">
            Contract  deployed at address: <u><strong>{contractAddress}</strong></u> <Button
                variant="outlined"
                color="primary"
                onClick={testContract}
                sx={{ p: 1 }}
            >
                Test Contract
            </Button>
        </Typography>


    </main>
}