import { Button, Grid } from "@mui/material";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";

export const Contact = () => {
  let navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  let showActiveUsers = searchParams.get("filter") === "active";
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>This is Contact Page</h1>
      </Grid>
      <Grid item xs={"auto"}>
        <h1>
          Navigate to next or previous page{" "}
          <Button onClick={() => navigate(-1)} variant="contained">
            ←
          </Button>
          <Button onClick={() => navigate("/home")} variant="contained">
            →
          </Button>
        </h1>
        <Button onClick={() => setSearchParams({ filter: "active" })}>
          Show only useful people
        </Button>
        <Button onClick={() => setSearchParams({})}>Show all people</Button>
        {showActiveUsers ? (
          <h2>Showing useful people</h2>
        ) : (
          <h2>Showing all people</h2>
        )}
        <h1>
          Contact 1: <Link to={"1"}>Mody</Link>
        </h1>
        <h1>
          Contact 2: <Link to={"2"}>Softy</Link>
        </h1>
        {showActiveUsers ? (
          <></>
        ) : (
          <h1>
            Contact 3: <Link to={"3"}>Ikkeee</Link>
          </h1>
        )}
        <Outlet />
      </Grid>
    </Grid>
  );
};
