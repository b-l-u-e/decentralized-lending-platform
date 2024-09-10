import { Bytes, ContractAbi, Web3 } from "web3";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Settings() {
  const [deployedContract, setDeployedContract] = useState<string>("");
  const contractAbi: ContractAbi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_dueDate",
          type: "uint256",
        },
      ],
      name: "applyForLoan",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "dueDate",
          type: "uint256",
        },
      ],
      name: "LoanApplied",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "borrower",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "LoanRepaid",
      type: "event",
    },
    {
      inputs: [],
      name: "repayLoan",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "checkLoanStatus",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const constractByteCode: Bytes =
    "6080604052348015600e575f80fd5b506106c88061001c5f395ff3fe608060405260043610610033575f3560e01c8063068b554e14610037578063d7bd993f14610062578063f966ade71461008a575b5f80fd5b348015610042575f80fd5b5061004b610094565b604051610059929190610477565b60405180910390f35b34801561006d575f80fd5b50610088600480360381019061008391906104cc565b610175565b005b6100926102b8565b005b5f805f805f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f206040518060800160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015f9054906101000a900460ff16151515158152505090508060600151816020015192509250509091565b60405180608001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281526020015f15158152505f803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201556060820151816003015f6101000a81548160ff0219169083151502179055509050503373ffffffffffffffffffffffffffffffffffffffff167fe542127723c2300ea5c49c4e8da341dec109235e25876322358b3cbcbc206aea83836040516102ac92919061050a565b60405180910390a25050565b5f805f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2090505f81600101541161033d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103349061058b565b60405180910390fd5b80600101543414610383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037a906105f3565b60405180910390fd5b806003015f9054906101000a900460ff16156103d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cb9061065b565b60405180910390fd5b6001816003015f6101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167fc200a1f31dd659e356e0f112c82558e25f49f7b0f84438691cd96f5cb3558823826001015460405161043a9190610679565b60405180910390a250565b5f8115159050919050565b61045981610445565b82525050565b5f819050919050565b6104718161045f565b82525050565b5f60408201905061048a5f830185610450565b6104976020830184610468565b9392505050565b5f80fd5b6104ab8161045f565b81146104b5575f80fd5b50565b5f813590506104c6816104a2565b92915050565b5f80604083850312156104e2576104e161049e565b5b5f6104ef858286016104b8565b9250506020610500858286016104b8565b9150509250929050565b5f60408201905061051d5f830185610468565b61052a6020830184610468565b9392505050565b5f82825260208201905092915050565b7f4e6f206c6f616e20746f207265706179000000000000000000000000000000005f82015250565b5f610575601083610531565b915061058082610541565b602082019050919050565b5f6020820190508181035f8301526105a281610569565b9050919050565b7f526570617920746865206578616374206c6f616e20616d6f756e7400000000005f82015250565b5f6105dd601b83610531565b91506105e8826105a9565b602082019050919050565b5f6020820190508181035f83015261060a816105d1565b9050919050565b7f4c6f616e20616c726561647920726570616964000000000000000000000000005f82015250565b5f610645601383610531565b915061065082610611565b602082019050919050565b5f6020820190508181035f83015261067281610639565b9050919050565b5f60208201905061068c5f830184610468565b9291505056fea26469706673582212207eafc394d2d2d2c3379180c2475804ce26f65d007b4fda4d6e5e364ee046576064736f6c634300081a0033";

  async function deploy() {
    toast.loading("Initializing Web3...", {
      theme: "colored",
    });
    const web3 = new Web3(
      "https://ethereum-sepolia.rpc.subquery.network/public"
    );

    const wallet = web3.eth.wallet.add(
      import.meta.env.VITE_METAMASK_PRIVATE_KEY
    );

    const contract = new web3.eth.Contract(contractAbi);

    toast.loading("Deploying contract...", {
      theme: "colored",
      autoClose: false,
    });

    const contractDeployer = contract.deploy({
      data: constractByteCode,
      arguments: [],
    });

    const receipt = await contractDeployer.send({ from: wallet[0].address });

    toast.loading("Contract deployed!", {
      theme: "colored",
      autoClose: false,
    });
    localStorage.setItem("deployedContractAddress", receipt.options.address);

    setDeployedContract(receipt.options.address);
  }

  useEffect(() => {
    //retrieving the stored contract address
    const storedContractAddress = localStorage.getItem(
      "deployedContractAddress"
    );

    if (storedContractAddress) {
      setDeployedContract(storedContractAddress);
    } else {
      setDeployedContract("No contract deployed yet");
    }
  }, []);

  return (
    <main className="space-y-5">
      <h1 className="flex items-center gap-5">
        Smart Contracts{" "}
        <button
          onClick={deploy}
          className="bg-blue-500 px-8 py-2 text-white rounded-md cursor-pointer hover:bg-blue-400 active:scale-[0.95]"
        >
          Deploy New Contract
        </button>
      </h1>
      <section className="">
        {deployedContract && (
          <div className="space-y-2.5">
            <h1 className="font-bold text-xl">Deployed Contract</h1>
            <p>
              Contract Address:{" "}
              <span className="text-slate-500">{deployedContract}</span>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
