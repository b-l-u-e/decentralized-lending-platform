import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import LendingPools from "./user-account/pages/LendingPools"
import LoanRepayments from "./user-account/pages/LoanRepayments"
import Home from "./user-account/pages/Home"
import CreditScore from "./user-account/pages/CreditScore"
import Profile from "./user-account/pages/Profile"
import Sidebar from "../components/ui/user-account-sidebar"
import TransferTokens from "./user-account/pages/TransferAssets"

export default function UserAccount() {
    return (<main className="h-[100vh]">
        <Router>
            <header className="sticky top-0 z-50"><Navbar /></header>
            <section className="flex items-start fixed w-full">
                <aside className="sticky bg-blue-50 h-[100vh]">
                    <Sidebar />
                </aside>
                <div className="overflow-y-auto h-[100vh] w-full">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/credit-score" element={<CreditScore />} />
                        <Route path="/lending-pools" element={<LendingPools />} />
                        <Route path="/loan-repayments" element={<LoanRepayments />} />
                        <Route path="/transfer" element={<TransferTokens />} />
                    </Routes>
                </div>
            </section>
        </Router>
    </main >
    )
}