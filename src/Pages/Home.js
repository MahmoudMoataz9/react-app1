import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>This is Home Page</h1>
      </Grid>
      <Grid item xs={"auto"}>
        <h1>
          Navigate to next or previous page{" "}
          <Button onClick={() => navigate(-1)} variant="contained">
            ←
          </Button>
          <Button onClick={() => navigate("/about")} variant="contained">
            →
          </Button>
        </h1>
      </Grid>
    </Grid>
  );
};
