import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';
import { useDeployedContract } from '../../hooks/use-deployed-contract';
import { useNavigate } from 'react-router-dom';

interface DeployContractFormProps {
    onSuccess: () => void;
    onInitiateDeployment: () => void;
    privateKey: string;
    showKeyInput: boolean
}

const DeployContractForm: React.FC<DeployContractFormProps> = ({ onSuccess, onInitiateDeployment, privateKey, showKeyInput }) => {
    const [deploying, setDeploying] = useState(false);
    const { deployedContract, deployContract } = useDeployedContract(privateKey);
    const navigate = useNavigate();

    const handleDeployingContract = async () => {
        setDeploying(true);
        await deployContract();
        if (deployedContract !== null) {
            setDeploying(false);
            onSuccess()
            navigate("/smart-contracts")
        }
    }
    return (
        <div>
            {!showKeyInput && <Button
                variant="contained"
                onClick={onInitiateDeployment}
            >
                {deploying ? <CircularProgress size={24} /> : 'Yes'}
            </Button>}

            {showKeyInput && <Button
                variant="contained"
                onClick={handleDeployingContract}
                disabled={deploying}
            >
                {deploying ? <CircularProgress size={24} /> : 'Deploy Contract'}
            </Button>}
        </div>
    );
};

export default DeployContractForm;