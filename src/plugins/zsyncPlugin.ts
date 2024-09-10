import { ZKsyncPlugin } from "web3-plugin-zksync";
import { Web3 } from "web3";

const web3 = new Web3();
const zkSyncPlugin = web3.registerPlugin(new ZKsyncPlugin("https://sepolia.era.zksync.dev"));

export { zkSyncPlugin }