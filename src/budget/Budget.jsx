import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Income from "./income";
import Salary from "./salary";
import Expenses from "./expenses";
import useCalculation from "./useBudgetCalculation";
import Post from "./Post";

export default function Budget() {
  const [{ income, salary, result, expenses }, dispatch] = useCalculation();

  return (
    <TableContainer>
      <Table size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">pris</TableCell>
            <TableCell align="right">antal</TableCell>
            <TableCell align="right">summa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <Income
            data={income}
            setData={(data) => dispatch({ post: "income", payload: data })}
          />
          <Salary
            data={salary}
            setData={(data) => dispatch({ post: "salary", payload: data })}
          />
          <Expenses
            data={expenses}
            setData={(data) => dispatch({ post: "expenses", payload: data })}
          />
          <Post heading="Rörelseresultat" rows={result.rows} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
