import { useEffect, useState } from "react";
import Web3 from "web3";
import { useAuth } from "./use-auth-client";

const web3 = new Web3("https://sepolia.era.zksync.dev");

const useAccount = () => {
    const { account } = useAuth();
    const [accountBalance, setBalance] = useState<string>("0");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBalance = async () => {
            if (account && window.ethereum) {
                try {
                    const balance = await web3.eth.getBalance(account);
                    //console.log(balance)
                    setBalance(web3.utils.fromWei(balance, "ether"));
                    setError(null);
                } catch (err) {
                    console.error("Error fetching balance:", err);
                    setError("Failed to fetch balance");
                }
            }
        };

        fetchBalance();
    }, [account]);

    return {
        accountBalance,
        error
    };
};

export default useAccount;