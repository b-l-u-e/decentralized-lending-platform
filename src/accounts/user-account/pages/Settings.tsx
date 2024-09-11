import { useDeployedContract } from "../../../hooks/use-deployed-contract";


export default function Settings() {

  const { deployedContract, deployContract } = useDeployedContract();

  return (
    <main className="space-y-5">
      <h1 className="flex items-center gap-5">
        <span className="font-bold text-2xl">Smart Contracts</span>
        <button
          type="button"
          onClick={deployContract}
          className="bg-blue-500 px-8 py-2 text-white rounded-md cursor-pointer hover:bg-blue-400 active:scale-[0.95]"
          title="Deploy Contract"
        >
          Deploy New Contract
        </button>
      </h1>
      <section className="">
        {deployedContract && (
          <div className="space-y-2.5">
            <h1 className="font-bold text-xl">Deployed Contract</h1>
            <p>
              Contract Address:{" "}
              <span className="text-slate-500">{deployedContract}</span>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
