import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreditScore from './pages/CreditScore';
import LendingPools from './pages/LendingPools';
import LoanRepayments from './pages/LoanRepayments';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/credit-score" element={<CreditScore />} />
                <Route path="/lending-pools" element={<LendingPools />} />
                <Route path="/loan-repayments" element={<LoanRepayments />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;