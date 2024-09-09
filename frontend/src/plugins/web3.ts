import { Web3 } from 'web3';
import { ChainlinkPlugin } from '@chainsafe/web3-plugin-chainlink';
import { ZKsyncPlugin } from "web3-plugin-zksync";

const web3 = new Web3("https://sepolia.era.zksync.dev");

const chainlinkPlugin = new ChainlinkPlugin();

web3.registerPlugin(chainlinkPlugin)
web3.registerPlugin(new ZKsyncPlugin("https://sepolia.era.zksync.dev"));

const zksyncPlugin: ZKsyncPlugin = web3.ZKsync;
const chainLinkPlugin = web3.chainlink;
export {
    web3,
    zksyncPlugin,
    chainLinkPlugin
};