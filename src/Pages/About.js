import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const About = () => {
  let navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>This is About Page</h1>
      </Grid>
      <Grid item xs={"auto"}>
        <h1>
          Navigate to next or previous page{" "}
          <Button onClick={() => navigate(-1)} variant="contained">
            ←
          </Button>
          <Button onClick={() => navigate("/services")} variant="contained">
            →
          </Button>
        </h1>
      </Grid>
    </Grid>
  );
};
