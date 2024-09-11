import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import DeployContractForm from './forms/deploy-contract-form';


interface DeployContractPromptProps {
  onClose: () => void;
  onDeploy: () => void;
}

const DeployContractPrompt: React.FC<DeployContractPromptProps> = ({ onClose, onDeploy }) => {
  const [showKeyInput, setShowKeyInput] = useState(false)
  const [privateKey, setPrivateKey] = useState("")

  const updatePrivateKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivateKey(`0x${e.target.value}`)
  }
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Deploy Smart Contract</DialogTitle>
      <DialogContent>
        <p>Would you like to deploy a smart contract?</p>
        {showKeyInput && <TextField
          label="Private Key"
          variant="outlined"
          fullWidth
          value={privateKey}
          onChange={updatePrivateKey}
          margin="normal"
          required
        />}
      </DialogContent>
      <DialogActions>
        <>
          <Button type="button" onClick={onClose}>Skip</Button>
          <DeployContractForm onSuccess={onDeploy} privateKey={privateKey} showKeyInput={showKeyInput} onInitiateDeployment={() => setShowKeyInput(true)} />
        </>
      </DialogActions>
    </Dialog>
  );
};

export default DeployContractPrompt;