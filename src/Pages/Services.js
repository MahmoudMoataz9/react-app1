import { Button, Grid } from "@mui/material";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const servicesStyle = ({ isActive }) => {
  return {
    fontSize: "2rem",
    color: "Blue",
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "underline" : "none",
  };
};

export const Services = () => {
  let navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>This is Services Page</h1>
      </Grid>
      <Grid item xs={"auto"}>
        <h1>
          Navigate to next or previous page{" "}
          <Button onClick={() => navigate(-1)} variant="contained">
            ←
          </Button>
          <Button onClick={() => navigate("/contact")} variant="contained">
            →
          </Button>
        </h1>
        <nav>
          <ul style={{ display: "flex", listStyleType: "none" }}>
            <li style={{ marginLeft: "1rem" }}>
              <NavLink style={servicesStyle} to="old">
                Old Services
              </NavLink>
            </li>
            <li style={{ marginLeft: "1rem" }}>
              <NavLink style={servicesStyle} to="new">
                New Services
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </Grid>
    </Grid>
  );
};
