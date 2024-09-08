import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import LendingPools from "./user-account/pages/LendingPools"
import LoanRepayments from "./user-account/pages/LoanRepayments"
import Home from "./user-account/pages/Home"
import CreditScore from "./user-account/pages/CreditScore"
import Profile from "./user-account/pages/Profile"

export default function UserAccount() {
    return (<main>
        <Router>
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path ="/profile" element={<Profile />} />
                <Route path="/credit-score" element={<CreditScore />} />
                <Route path="/lending-pools" element={<LendingPools />} />
                <Route path="/loan-repayments" element={<LoanRepayments />} />
            </Routes>
        </Router>
    </main >
    )
}