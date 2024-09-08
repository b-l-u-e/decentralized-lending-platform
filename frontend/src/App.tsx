import React from 'react';
import { AuthProvider, useAuth } from './hooks/use-auth-client';
import UserAccount from './accounts';
import Login from './pages/Login';

const App: React.FC = () => {
    const { account } = useAuth()
    return (
        <>
            {account ? <UserAccount /> : <Login />}
        </>
    )
};

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);