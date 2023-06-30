import {
  Button,
  TextField,
  Typography,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const navLinkStyle = ({ isActive }) => {
  return {
    color: "white",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
  };
};

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            My App
          </Typography>
          <nav>
            <ul style={{ display: "flex", listStyleType: "none" }}>
              <li style={{ marginLeft: "1rem" }}>
                <NavLink style={navLinkStyle} to="/home">
                  Home
                </NavLink>
              </li>
              <li style={{ marginLeft: "1rem" }}>
                <NavLink style={navLinkStyle} to="/about">
                  About
                </NavLink>
              </li>
              <li style={{ marginLeft: "1rem" }}>
                <NavLink style={navLinkStyle} to="/services">
                  Services
                </NavLink>
              </li>
              <li style={{ marginLeft: "1rem" }}>
                <NavLink style={navLinkStyle} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
      <Grid
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        item
        xs={12}
      ></Grid>
    </Grid>
  );
};
