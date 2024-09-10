import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Models, ORAPlugin, Chain } from "@ora-io/web3-plugin-ora";
import { Web3 } from "web3";
import useAccount from "../../../hooks/useAccount";

// Initialize RPC and plugin
const web3 = new Web3("https://1rpc.io/sepolia");
web3.registerPlugin(new ORAPlugin(Chain.SEPOLIA));
web3.eth.accounts.wallet.add(`0x${import.meta.env.VITE_METAMASK_PRIVATE_KEY}`);

export default function AskAi() {
    const { account } = useAccount()
    const [response, setResponse] = useState('')
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const PROMPT: string = e.currentTarget[0].value;

        try {
            if (account) {
                const fee = await web3.ora.estimateFee(Models.LLAMA2);

                const aiResult = await web3.ora.calculateAIResult(account, Models.LLAMA2, PROMPT, (fee).toString())
                const response: string = await web3.ora.getAIResult(Models.LLAMA2, PROMPT);

                setTimeout(async () => {
                    const result = await web3.ora.getAIResult(Models.LLAMA2, PROMPT);
                    console.log('Fee: ' + fee);
                    console.log(aiResult)
                    console.log(response)
                    setResponse(result)
                }, 30000);

            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <main className="grid place-items-center h-screen">
            <form className="container space-y-5" onSubmit={handleSubmit}>
                <div className="w-full h-[700px] bg-slate-100 p-5">
                    <MessageCard message="Hello" />
                </div>
                <div className="flex items-center gap-5">
                    <TextField id="prompt" label="Prompt" variant="outlined" name="prompt" className="w-full" />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{
                            width: "200px",
                            padding: 1.5,
                            fontSize: "1rem",
                        }}
                    >
                        Send Query
                    </Button>
                </div>
            </form>
        </main>
    )
}


function MessageCard({ message }: { message: string }) {
    return (
        <div className="p-5 bg-white rounded-lg">
            {message}
        </div>
    )
}
