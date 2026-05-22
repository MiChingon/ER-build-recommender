import { Link as RouterLink, Outlet } from "react-router-dom";
import { AppBar, Box, Container, Stack, Toolbar, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GoogleAnalytics from "./components/GoogleAnalytics";

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
      <GoogleAnalytics />
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
              <Stack direction="row" spacing={1} sx={{ alignItems: "baseline" }}>
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
                  Tarnished Builds
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: "rgba(212,175,55,0.75)",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    letterSpacing: 0.5,
                    border: "1px solid rgba(212,175,55,0.4)",
                    borderRadius: 999,
                    px: 0.85,
                    py: 0.05,
                    lineHeight: 1.2,
                  }}
                >
                  v{__APP_VERSION__}
                </Typography>
              </Stack>
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
          gap: { xs: 1, md: 2 },
          flexWrap: "wrap",
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
        <Box component="span">Available for adds, contact</Box>
        <Box
          component="a"
          href="https://fabianalmaraz.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Owner contact page (opens in new tab)"
          sx={{
            color: "primary.main",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            border: "1px solid rgba(212,175,55,0.6)",
            transition: "background-color 120ms ease, border-color 120ms ease",
            "&:hover": {
              bgcolor: "rgba(212,175,55,0.2)",
              borderColor: "primary.main",
            },
          }}
        >
          <LinkIcon sx={{ fontSize: "1rem" }} />
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Outlet />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          textAlign: "center",
          bgcolor: "transparent",
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "rgba(255,255,255,0.55)", letterSpacing: 0.3, fontSize: "0.9rem" }}
        >
          Powered by the{" "}
          <Box
            component="a"
            href="https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "primary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Fextralife Elden Ring Wiki
          </Box>
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255,255,255,0.55)",
            letterSpacing: 0.3,
            fontSize: "0.9rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.6,
            mt: 0.5,
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 64 64"
            aria-hidden
            sx={{ width: "0.95em", height: "0.95em", flexShrink: 0 }}
          >
            {/* Stylized Claude mark — eight petals radiating from a center */}
            <g fill="#D97757">
              <path d="M32 4 C34 18 34 22 32 32 C30 22 30 18 32 4 Z" />
              <path d="M32 60 C30 46 30 42 32 32 C34 42 34 46 32 60 Z" />
              <path d="M4 32 C18 30 22 30 32 32 C22 34 18 34 4 32 Z" />
              <path d="M60 32 C46 34 42 34 32 32 C42 30 46 30 60 32 Z" />
              <path d="M12 12 C22 20 25 23 32 32 C23 25 20 22 12 12 Z" />
              <path d="M52 52 C42 44 39 41 32 32 C41 39 44 42 52 52 Z" />
              <path d="M52 12 C44 22 41 25 32 32 C39 23 42 20 52 12 Z" />
              <path d="M12 52 C20 42 23 39 32 32 C25 41 22 44 12 52 Z" />
            </g>
          </Box>
          Built with Claude AI
        </Typography>
      </Box>
    </Box>
  );
}
