// import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PermanentDrawer, {
  drawerWidth,
} from "./components/Drawer/PermanentDrawer";
import React from "react";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PageRouter from "./pages/PageRouter";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Cash Register App
            </Typography>
          </Toolbar>
        </AppBar>

        <PermanentDrawer />

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Container maxWidth="sm">
            <PageRouter />
          </Container>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
