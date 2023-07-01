import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { relics } from "./Data";
import { TextField } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";


export class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relics: relics,
      search: "",
      currentPage: 0,
      rowsPerPage: 10,
    };
  }
  handleChangePage(event, newPage) {
    this.setState({ currentPage: newPage });
  }
  handleChangeRowsPerPage(event) {
    this.setState({
      currentPage: 0,
      rowsPerPage: parseInt(event.target.value, 10),
    });
  }

  render() {
    const { currentPage, rowsPerPage, relics } = this.state;
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = relics.filter((item) => {
      return this.state.search.toLocaleLowerCase() === ""
        ? item
        : item.name.toLocaleLowerCase().includes(this.state.search);
    }).slice(startIndex, endIndex);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, relics.length - currentPage * rowsPerPage);

    return (
      <>
       <TextField
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
          id="standard-basic"
          variant="standard"
        />
      <TableContainer component={Paper}>
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
            {paginatedData.map((relic) => (
                <TableRow
                  key={relic.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {relic.name}
                  </TableCell>
                  {relic.rewards ? (
                    relic.rewards
                      .sort((a, b) => a.chance - b.chance)
                      .map((item) => {
                        return <TableCell>{item.item.name}</TableCell>;
                      })
                  ) : (
                    <TableCell>none</TableCell>
                  )}
                </TableRow>
              ))}
              {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={relics.length}
          page={currentPage}
          rowsPerPage={rowsPerPage}
          onPageChange={(event, newPage) => this.handleChangePage(event, newPage)}
          onRowsPerPageChange={(event) => this.handleChangeRowsPerPage(event)}
        />
      </TableContainer>
      </>
    );
  }
}
