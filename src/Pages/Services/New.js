import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { relics } from "./Data";
import { Grid, TextField } from "@mui/material";

export class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relics: relics,
      search: "",
    };
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <TextField onChange={(e)=>{this.setState({search: e.target.value})}} id="standard-basic" variant="standard" />{" "}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Relic Name</TableCell>
              <TableCell align="right">Rare</TableCell>
              <TableCell align="right">Uncommon</TableCell>
              <TableCell align="right">Uncommon</TableCell>
              <TableCell align="right">Common</TableCell>
              <TableCell align="right">Common</TableCell>
              <TableCell align="right">Common</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relics.filter((item)=> {
              return this.state.search.toLocaleLowerCase() === ''? item : item.name.toLocaleLowerCase().includes(this.state.search)
            }).map((relic) => (
              <TableRow
                key={relic.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {relic.name}
                </TableCell>
                {relic.rewards[0]? relic.rewards.sort((a, b) => a.chance - b.chance).map((item)=> {
                  return <TableCell>{item.item.name}</TableCell>
                }) : <TableCell>none</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
