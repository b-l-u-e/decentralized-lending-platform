import { MainnetPriceFeeds } from "@chainsafe/web3-plugin-chainlink";
import TokenTransferForm from "../../../components/forms/TransferTokensForm";
import { chainLinkPlugin } from "../../../plugins/web3";


export default function TransferTokens() {
    /*chainLinkPlugin.getPrice(MainnetPriceFeeds.LinkEth).then((res) => {
        console.log(res)
    })*/
    return (
        <main>
            <TokenTransferForm />
        </main>
    )
}