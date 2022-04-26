import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Income from "./income";
import Salary from "./salary";
import useCalculation from "./useCalculation";

export default function Budget() {
  const [{ income, salary }, dispatch] = useCalculation();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell></TableCell>
            <TableCell align="right">pris</TableCell>
            <TableCell align="right">antal</TableCell>
            <TableCell align="right">summa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Income
            data={income}
            setData={(data) => dispatch({ part: 'income', data })}
          />
          <Salary
            data={salary}
            setData={(data) => dispatch({ part: 'salary', data })}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
