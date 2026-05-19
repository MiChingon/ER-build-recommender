import { Link as RouterLink, Outlet } from "react-router-dom";
import { AppBar, Box, Container, Stack, Toolbar, Typography } from "@mui/material";

const BACKGROUND_IMAGE =
  "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree.jpg";

// Inline SVG used as the masthead emblem — a gold runic 8-point star inside
// a dark circle. Matches the favicon so the brand identity reads across tab
// and page.
const Emblem = ({ size = 36 }: { size?: number }) => (
  <Box
    component="svg"
    viewBox="0 0 64 64"
    aria-hidden
    sx={{
      width: size,
      height: size,
      filter: "drop-shadow(0 0 6px rgba(212,175,55,0.45))",
      flexShrink: 0,
    }}
  >
    <circle cx="32" cy="32" r="28" fill="#1a1714" stroke="#d4af37" strokeWidth="3" />
    <path
      d="M32 12 L32 52 M12 32 L52 32 M19 19 L45 45 M45 19 L19 45"
      stroke="#d4af37"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </Box>
);

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
      <AppBar
        position="static"
        sx={{
          bgcolor: "rgba(20,18,15,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(212,175,55,0.35)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        <Toolbar sx={{ py: 1.5 }}>
          <Stack
            direction="row"
            spacing={2}
            component={RouterLink}
            to="/"
            sx={{ color: "inherit", textDecoration: "none", alignItems: "center" }}
          >
            <Emblem />
            <Box>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  background: "linear-gradient(180deg, #f4d670 0%, #c4942b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                }}
              >
                Elden Ring Build Recommender
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "rgba(212,175,55,0.7)", letterSpacing: 1, textTransform: "uppercase" }}
              >
                Optimal stats · AP · status · spells
              </Typography>
            </Box>
          </Stack>
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
