import { Link as RouterLink, Outlet } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

const BACKGROUND_IMAGE =
  "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree.jpg";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        backgroundImage: `linear-gradient(rgba(15,14,12,0.82), rgba(15,14,12,0.94)), url(${BACKGROUND_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AppBar position="static" sx={{ bgcolor: "rgba(20,18,15,0.8)", backdropFilter: "blur(6px)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
          >
            Elden Ring Build Recommender
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="aside"
        aria-label="Advertisement availability"
        sx={{
          width: "100%",
          height: "calc(100vh / 12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          bgcolor: "rgba(212,175,55,0.12)",
          borderTop: "1px solid rgba(212,175,55,0.4)",
          borderBottom: "1px solid rgba(212,175,55,0.4)",
          color: "primary.main",
          fontWeight: 600,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          fontSize: { xs: "0.85rem", md: "1rem" },
        }}
      >
        Available for adds, contact the owner
      </Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
