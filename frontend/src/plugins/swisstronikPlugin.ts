import { SwisstronikPlugin } from "@swisstronik/web3-plugin-swisstronik";
import { Web3 } from "web3";

// Initialize RPC and plugin
const web3 = new Web3("https://json-rpc.testnet.swisstronik.com");
const swisstronikPlugin = web3.registerPlugin(new SwisstronikPlugin());

export { swisstronikPlugin }

