import { Models, ORAPlugin, SimplePromptAddresses as PromptAddresses } from "@ora-io/web3-plugin-ora";
import { Web3 } from "web3";

const web3 = new Web3("https://sepolia.drpc.org");
const oraAiPlugin = web3.registerPlugin(new ORAPlugin(PromptAddresses.SEPOLIA));
const Olama_Model = Models.LLAMA2;

export { oraAiPlugin, Olama_Model }