import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Income, { useIncomeData } from "./Income";

export default function Budget() {
  const [incomeSummary, incomeData, setIncomeData] = useIncomeData();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell></TableCell>
            <TableCell align="right">á pris</TableCell>
            <TableCell align="right">Antal</TableCell>
            <TableCell align="right">Summa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Income
            summary={incomeSummary}
            data={incomeData}
            setData={setIncomeData}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
