import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth-client";
import { Web3 } from 'web3';
import { Chain, EnsPlugin } from '@namespace-ens/web3-plugin-ens';
import { RegistrationRequest } from "@namespace-ens/web3-plugin-ens/dist/ens-contracts/controller";

const EditProfile: React.FC = () => {
  const { profile, setProfile, account } = useAuth();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [ensName, setEnsName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      setFirstName(profile.firstName || "");
      setLastName(profile.lastName || "");
      setEnsName(profile.ensName || "");
    }
  }, [profile]);

  const handleGenerateEnsName = () => {
    //const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
    const generatedEnsName = `${firstName.toLowerCase()}${lastName ? `-${lastName.toLowerCase()}` : ""
      }`;
    setEnsName(generatedEnsName);
  };

  //function to set and resolve the address for the ens name
  const handleSetAndResolveEnsName = async () => {
    try {
      const web3 = new Web3('https://ethereum-sepolia-rpc.publicnode.com');
      web3.registerPlugin(new EnsPlugin(Chain.Sepolia));
      const privateKey = `0x${import.meta.env.VITE_METAMASK_PRIVATE_KEY}`;
      web3.eth.accounts.wallet.add(privateKey);


      if (ensName && account) {
        const request: RegistrationRequest = {
          label: ensName,
          owner: account,
          durationInSeconds: 31536000,
          secret: "test",
          resolver: "0x231b0Ee14048e9dCcD1d247744d114a4EB5E8E63",
          setAsPrimary: true,
          fuses: 1,
        }

        const res = await web3.ens.commit(request);
        alert(`${ensName}.eth is being registered, please wait for the transaction to be confirmed on the blockchain.`);

        await web3.ens.registerEnsDomain(request);
      }
    } catch (e) {
      alert(e.message)
    }

  }

  useEffect(() => {
    if (firstName !== "" || lastName !== "") {
      handleGenerateEnsName();
    }
  }, [firstName, lastName]);

  const handleSave = () => {
    setProfile({ ...profile, firstName, lastName, ensName });
    navigate("/profile");
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Profile
        </Typography>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          margin="normal"
        />
        <Box display="flex" alignItems="center" margin="normal" gap="20px">
          <div className="flex items-end gap-1 w-full">
            <TextField
              label="ENS Name"
              variant="outlined"
              fullWidth
              value={ensName}
              onChange={(e) => setEnsName(e.target.value)}
              margin="normal"
            />
            <span className="text-slate-500">.eth</span>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSetAndResolveEnsName}
            sx={{ width: "200px", paddingY: "15px", marginTop: "8px" }}
            disabled={ensName === ""}
          >
            Generate ENS
          </Button>
        </Box>

        <Button variant="contained" onClick={handleSave} sx={{ width: "200px", paddingY: "15px", marginTop: "8px", fontSize: "16px" }}>
          Save Profile
        </Button>
      </Box>
    </Container>
  );
};

export default EditProfile;
