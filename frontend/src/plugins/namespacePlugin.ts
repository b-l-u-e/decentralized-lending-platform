import Web3 from "web3";
import { Chain, EnsPlugin } from '@namespace-ens/web3-plugin-ens';

const web3 = new Web3("https://sepolia.drpc.org");
const namespacePlugin = web3.registerPlugin(new EnsPlugin(Chain.Mainnet));
web3.eth.accounts.wallet.add(import.meta.env.VITE_METAMASK_PRIVATE_KEY);

export { namespacePlugin }