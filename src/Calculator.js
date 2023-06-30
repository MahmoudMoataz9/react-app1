import React from "react";
import { Button, TextField, Typography, Grid } from "@mui/material";

// styling
const gridCont = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  background: "black",
};
const gridItem = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  background: "#D3D3D3",
};
const gridItem2 = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  background: "white",
};
const gridScrn = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  background: "white",
  width: "20vw",
  minWidth: "12vw",
  height: "10vh",
};
const btn = {
  width: "5vw",
  minWidth: "3vw",
  height: "10vh",
  fontSize: "1.2vw",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      message: "",
      title: [],
    };
  }

  callApi = (endPoint, data) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3001/${endPoint}`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ res: data }),
        method: "POST",
      })
        .then(async (res) => {
          const data = await res.json();
          console.log(res.json);
          resolve(data);
        })
        .catch((err) => console.log(err));
    });
  };

  componentDidMount() {}
  buttonClick = (item) => {
    if (item === "=") {
      this.callApi("calc", this.state.value).then((res) => {
        console.log(res);
        this.setState({ value: res.res });
      });
    } else {
      this.setState({
        value: this.state.value + item,
      });
    }
  };

  changeHandle = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <Grid style={gridCont} height={"100vh"} container>
        <Grid style={gridCont} container>
          <Grid item style={gridScrn}>
            <TextField
              fullWidth
              value={this.state.value}
              onChange={this.changeHandle}
              id="outlined-basic"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}></Grid>
          {[
            "C",
            "7",
            "8",
            "9",
            "<",
            "4",
            "5",
            "6",
            "+",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "",
            "/",
            "*",
            "=",
            "",
          ].map((item, index) => {
            return (
              <React.Fragment>
                {index % 4 === 0 ? <Grid item xs={12}></Grid> : <></>}
                <Grid
                  item
                  style={
                    Number(item) || item === "0" || item === "" || item === "."
                      ? gridItem
                      : gridItem2
                  }
                  xs={"auto"}
                >
                  <Button
                    disabled={item === ""}
                    onClick={() => this.buttonClick(item)}
                    style={btn}
                    variant="text"
                  >
                    {item}
                  </Button>
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

export default App;
