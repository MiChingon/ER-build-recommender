import { Link as RouterLink, Outlet } from "react-router-dom";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppBar position="static">
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
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
