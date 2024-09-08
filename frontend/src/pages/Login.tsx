import { Container, Box, Typography, Button } from "@mui/material";

export default function Login() {
    return (
        <main>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 8,
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Login with MetaMask
                    </Typography>
                    {account ? (
                        <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
                            Connected Account: {account}
                        </Typography>
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={login}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Connect with MetaMask
                        </Button>
                    )}
                </Box>
            </Container>
        </main>
    )
}