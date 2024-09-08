import { createContext, useState, useEffect, useContext } from "react";
import Web3 from "web3";

const AuthContext = createContext(null);

export const useAuthClient = () => {
    const [account, setAccount] = useState<string | null>(null);
    const [web3, setWeb3] = useState<Web3 | null>(null);


    const web3Instance = new Web3(web3?.currentProvider);
    const login = async () => {
        if (window.ethereum) {
            try {
                setWeb3(web3Instance);

                // Request account access if needed
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
                console.log('Logged in with account:', accounts[0]);
            } catch (error) {
                console.error('Login failed:', error);
            }
        } else {
            console.error('MetaMask not installed');
        }
    };

    const logout = async () => {
        if (window.ethereum) {
            await window.ethereum.request({
                "method": "wallet_revokePermissions",
                "params": [
                    {
                        "eth_accounts": {}
                    }
                ]
            }).then(() => {
                setWeb3(null);
                setAccount(null);
            }).catch((e) => {
                alert(e.message)
            });
        }

    };

    useEffect(() => {
        const checkIfLoggedIn = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                }
            }
        };
        checkIfLoggedIn();
    }, []);

    return {
        account,
        web3,
        login,
        logout
    }
};

export const AuthProvider = ({ children }) => {
    const auth = useAuthClient();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};


export const useAuth = () => useContext(AuthContext);
