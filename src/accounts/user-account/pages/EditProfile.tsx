import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth-client";
import { Web3 } from "web3";
import { Chain, EnsPlugin } from "@namespace-ens/web3-plugin-ens";
import { RegistrationRequest } from "@namespace-ens/web3-plugin-ens/dist/ens-contracts/controller";
import { toast } from "react-toastify";

const EditProfile: React.FC = () => {
  const { profile, ensName, setEnsName } = useAuth();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
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
    const generatedEnsName = `${firstName.toLowerCase()}${
      lastName ? `${lastName.toLowerCase()}` : ""
    }`;
    setEnsName(generatedEnsName);
  };

  //function to set and resolve the address for the ens name
  const handleSetAndResolveEnsName = async () => {
    try {
      const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com");
      web3.registerPlugin(new EnsPlugin(Chain.Sepolia));

      const privateKey =
        "0xf6ec2f8a022aa21ab6cf976fcc37a51e83be6f9fde0c2780b94b706de6d82463";
      const wallet = web3.eth.wallet.add(privateKey);

      if (ensName && wallet[0].address) {
        const request: RegistrationRequest = {
          label: ensName,
          owner: wallet[0].address,
          durationInSeconds: 31536000,
          secret: "test",
          resolver: "0x8FADE66B79cC9f707aB26799354482EB93a5B7dD",
          setAsPrimary: false,
          fuses: 1,
        };

        toast.loading(`Committing ${ensName}.eth. Please be patient`, {
          theme: "colored",
        });
        const res = await web3.ens.commit(request);
        toast.success(
          `Successfully committed ${ensName}.eth. Transaction hash: ${res.transactionHash}`,
          {
            theme: "colored",
          }
        );

        toast.loading(`Registering ${ensName}.eth. Please be patient`, {
          theme: "colored",
        });
        setTimeout(async () => {
          const result = await web3.ens.registerEnsDomain(request);
          toast.success(
            `Successfully registered ${ensName}.eth` + result.transactionHash,
            {
              theme: "colored",
              autoClose: false,
            }
          );
          //set the profile information using the ensName informtion
          localStorage.setItem(
            "profile",
            JSON.stringify({ firstName, lastName, ensName })
          );
        }, 120000);
      }
    } catch (e) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    if (firstName !== "" || lastName !== "") {
      handleGenerateEnsName();
    }
  }, [firstName, lastName]);

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "profile",
      JSON.stringify({ firstName, lastName, ensName })
    );
    navigate("/profile");
  };

  return (
    <Container>
      <form onSubmit={handleSave}>
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

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "200px",
              paddingY: "15px",
              marginTop: "8px",
              fontSize: "16px",
            }}
          >
            Save Profile
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default EditProfile;
