import { Web3 } from 'web3';
import { ChainlinkPlugin } from '@chainsafe/web3-plugin-chainlink';
import {
    types,
    Web3ZKsyncL2,
    ZKsyncPlugin,
    ZKsyncWallet,
} from "web3-plugin-zksync";

const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com");

const chainlinkPlugin = new ChainlinkPlugin();

web3.registerPlugin(chainlinkPlugin)
web3.registerPlugin(new ZKsyncPlugin(Web3ZKsyncL2.initWithDefaultProvider(types.Network.Sepolia)))

const zksyncPlugin: ZKsyncPlugin = web3.ZKsync;
const chainLinkPlugin = web3.chainlink;
const walletPlugin: ZKsyncWallet = new zksyncPlugin.Wallet(import.meta.env.VITE_METAMASK_PRIVATE_KEY!);



export {
    web3,
    zksyncPlugin,
    chainLinkPlugin,
    walletPlugin
};