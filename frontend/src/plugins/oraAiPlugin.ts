import { ORAPlugin, SimplePromptAddresses as PromptAddresses } from "@ora-io/web3-plugin-ora";
import { Web3 } from "web3";

const web3 = new Web3("https://sepolia.drpc.org");
const oraAiPlugin = web3.registerPlugin(new ORAPlugin(PromptAddresses.SEPOLIA));

export { oraAiPlugin }