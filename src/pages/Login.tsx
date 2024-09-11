import { Container, Box, Typography } from "@mui/material";
import { useAuth } from "../hooks/use-auth-client";
import { OrbitingSponsorsCircles } from "../components/ui/orbiting-sponsors-circles";

export default function Login() {
  const { account, login } = useAuth();
  return (
    <main className="h-screen w-full flex">
      <section className="bg-gray-100 w-full xl:w-1/2 h-full grid place-items-center">
        <div className="grid place-items-center space-y-8">
          <Typography
            component="h1"
            variant="h2"
            className="flex items-center flex-col "
          >
            <img
              src="/images/chainsafe_logo.png"
              className="w-20 p-2.5 rounded-full"
            />
            <p className="text-black font-bold">Welcome to Swift</p>
            <p className="text-3xl text-slate-500"><small>Your Trusted Lending Partner</small></p>
          </Typography>
          <div className="bg-white w-fit grid place-items-center p-5 rounded-md shadow-md">
            <Container component="div" maxWidth="sm">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography
                  component="h1"
                  variant="h4"
                  className="flex items-center"
                >
                  <p className="text-black font-bold">Login</p>
                </Typography>
                {account ? (
                  <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
                    Connected Account: {account}
                  </Typography>
                ) : (
                  <button
                    onClick={login}
                    className=" px-10 py-2 rounded-md border flex items-center text-xl hover:bg-slate-50 active:scale-[0.95] duration-300 transition-all"
                  >
                    <img src="/images/metamask.png" className="w-12 p-2.5" />
                    Continue with MetaMask
                  </button>
                )}
              </Box>
            </Container>
          </div>
        </div>
      </section>
      <section className="max-xl:hidden xl:w-1/2">
        <OrbitingSponsorsCircles />
      </section>
    </main>
  );
}
