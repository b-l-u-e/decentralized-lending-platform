import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import LendingPools from "./user-account/pages/LendingPools";
import LoanRepayments from "./user-account/pages/LoanRepayments";
import Home from "./user-account/pages/Home";
import CreditScore from "./user-account/pages/CreditScore";
import Profile from "./user-account/pages/Profile";
import Sidebar from "../components/ui/user-account-sidebar";
import TransferTokens from "./user-account/pages/TransferAssets";
import AskAi from "./user-account/pages/AskAi";
import EditProfile from "./user-account/pages/EditProfile";
import Loans from "./user-account/pages/Loans";
import LoanForm from "./user-account/pages/LoanForm";
import Settings from "./user-account/pages/Settings";
import { useState, useEffect } from "react";
import DeployContractPrompt from "../components/deploy-contract-prompt";

export default function UserAccount() {
  const [showDeployPrompt, setShowDeployPrompt] = useState(false);
  const contractAddress: string | null = localStorage.getItem("deployedContractAddress");

  useEffect(() => {
    if (contractAddress === null) {
      setShowDeployPrompt(true);
    } else {
      setShowDeployPrompt(false);
    }
  }, [contractAddress]);
  return (
    <main className="h-[100vh] relative">
      <Router>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <section className="flex items-start fixed w-full">
          <aside className="sticky bg-gray-100 h-[100vh] shadow-sm">
            <Sidebar />
          </aside>
          <div className="overflow-y-auto h-[100vh] w-full p-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile">
                <Route index element={<Profile />} />
                <Route path="edit-profile" element={<EditProfile />} />
              </Route>
              <Route path="/credit-score" element={<CreditScore />} />
              <Route path="/lending-pools" element={<LendingPools />} />
              <Route path="/loans">
                <Route index element={<Loans />} />
                <Route path="apply" element={<LoanForm />} />
                <Route path="loan-repayments" element={<LoanRepayments />} />
              </Route>
              <Route path="/transfer" element={<TransferTokens />} />
              <Route path="/ask-ai" element={<AskAi />} />
              <Route path="/smart-contracts">
                <Route index element={<Settings />} />
              </Route>
            </Routes>
          </div>
        </section>

        {showDeployPrompt && (
          <DeployContractPrompt
            onClose={() => setShowDeployPrompt(false)}
            onDeploy={() => {
              // Handle contract deployment
              setShowDeployPrompt(false);
            }}
          />
        )}
      </Router>
    </main>
  );
}
