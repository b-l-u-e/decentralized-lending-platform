<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import CreditScore from './pages/CreditScore';
import LendingPools from './pages/LendingPools';
import LoanRepayments from './pages/LoanRepayments';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './hooks/use-auth-client';

const App: React.FC = () => {
    const { account } = useAuth()
    const navigate = useNavigate()
    if (!account) {

    }
    return (
        <>
            {account ? "Show User Account Component" : "Show Login Component"}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/credit-score" element={<CreditScore />} />
                    <Route path="/lending-pools" element={<LendingPools />} />
                    <Route path="/loan-repayments" element={<LoanRepayments />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </Router></>
    );
};

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);;
=======
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreditScore from "./pages/user/CreditScore";
import LendingPools from "./pages/user/LendingPools";
import LoanRepayments from "./pages/user/LoanRepayments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
>>>>>>> a474a764ea061c18759019b113fa11f9e75ead2a
