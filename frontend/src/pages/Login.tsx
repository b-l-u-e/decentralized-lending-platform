import { Container, Box, Typography, Button } from "@mui/material";
import { useAuth } from "../hooks/use-auth-client";
import { OrbitingSponsorsCircles } from "../components/ui/orbiting-sponsors-circles";

export default function Login() {
    const { account, login } = useAuth();
    return (
        <main className="h-screen w-full flex">
            <section className='bg-gray-100 w-1/2 h-full grid place-items-center'>
                <div className="bg-white w-fit grid place-items-center p-5 rounded-md shadow-md">
                    <Container component="div" maxWidth="sm">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mt: 8,
                            }}
                        >
                            <Typography component="h1" variant="h4">
                                CryptoLoan
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
                </div>
            </section>
            <section className="w-1/2">
                <OrbitingSponsorsCircles />
            </section>
        </main>
    )
}