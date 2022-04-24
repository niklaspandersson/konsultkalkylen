import { useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Row from "./Row";
import { Typography } from "@mui/material";

function setPartial(setter, data) {
  setter((prev) => ({
    ...prev,
    ...data,
  }));
}

function usePartialSetter(setter) {
  return useCallback((newData) => setPartial(setter, newData), [setter]);
}

export function useIncomeData() {
  const [data, setData] = useState({});
  const summary = {
    unitPrice: 830,
    count: 1052,
    sum: 820 * 1052,
  };
  return [summary, data, usePartialSetter(setData)];
}

const RightAlignedTextField = styled(TextField)({
  "& input": {
    textAlign: "right",
  },
});

export default function Income({ summary, data, setData }) {
  return (
    <Row heading="Arvoden" {...summary}>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="subtitle2">Uppdrag</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Timarvode (kr/timme ex. moms)
              </TableCell>
              <TableCell align="right">
                <RightAlignedTextField
                  variant="standard"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  defaultValue={830}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Beläggning (antal månader)
              </TableCell>
              <TableCell align="right">{9}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="subtitle2">Arbetstid</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Arbetstimmar per vecka
              </TableCell>
              <TableCell align="right">{35}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Lediga veckor under uppdrag
              </TableCell>
              <TableCell align="right">{6}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Uppskattad andel sjukdagar/vab
              </TableCell>
              <TableCell align="right">{0.05}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Row>
  );
}
