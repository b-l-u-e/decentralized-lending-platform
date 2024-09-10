import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/use-auth-client";

const EditProfile: React.FC = () => {
  const { profile, setProfile } = useAuth();
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
    const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
    const generatedEnsName = `${firstName.toLowerCase()}${
      lastName ? `-${lastName.toLowerCase()}` : ""
    }-${randomNumber}.eth`;
    setEnsName(generatedEnsName);
  };

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
        <Box display="flex" alignItems="center" margin="normal">
          <TextField
            label="ENS Name"
            variant="outlined"
            fullWidth
            value={ensName}
            onChange={(e) => setEnsName(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleGenerateEnsName}
            sx={{ marginLeft: 2 }}
            disabled={firstName === ""}
          >
            Generate ENS
          </Button>
        </Box>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default EditProfile;
