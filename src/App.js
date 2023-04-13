import React from "react";
import { Button, TextField, Typography } from "@mui/material";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      title: ["My name is markiplier"],
    };
  }
  render() {
    return (
      <div style={{ padding: "20px" }}>
        {" "}
        <Typography variant="h2">
          {" "}
          {this.state.title.map((curr, index) => {
            return <Typography variant="h2">{curr}</Typography>;
          })}{" "}
        </Typography>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={(e) => {
            this.setState({ message: e.target.value });
          }}
        />
        <Button
          style={{ top: "12px" }}
          variant="outlined"
          onClick={() => {
            this.setState({ title: [...this.state.title, this.state.message] });
          }}
        >
          Text
        </Button>
      </div>
    );
  }
}

export default App;
