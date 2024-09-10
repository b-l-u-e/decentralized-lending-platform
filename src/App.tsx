import React from "react";
import { AuthProvider, useAuth } from "./hooks/use-auth-client";
import UserAccount from "./accounts";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const { account } = useAuth();
  return <>{account ? <UserAccount /> : <Login />}</>;
};

export default () => (
  <AuthProvider>
    <App />
    <ToastContainer />
  </AuthProvider>
);
