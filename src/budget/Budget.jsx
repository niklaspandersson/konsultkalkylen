import useCalculation from './useBudgetCalculation';
import Tabular from './Tabular';
import Post from './Post';
import IncomeParameters from './income/IncomeParameters';
import SalaryParameters from './salary/SalaryParameters';
import { TableCell, TableRow } from '@mui/material';

const Result = ({ title, value }) => {
  return (
    <TableRow>
      <TableCell sx={{ fontSize: '1.2em', fontWeight: 'bold' }} colSpan={3}>
        {title}
      </TableCell>
      <TableCell
        sx={{
          borderTop: '1px solid black',
          fontSize: '1.2em',
          fontWeight: 'bold',
        }}
        align="right"
      >
        {value.toLocaleString()}
      </TableCell>
    </TableRow>
  );
};

export default function Budget() {
  const [{ income, salary, result, expenses }, dispatch] = useCalculation();

  return (
    <Tabular>
      <Post heading="Inkomster" rows={income.rows}>
        <IncomeParameters
          data={income}
          setData={(data) => dispatch({ post: 'income', payload: data })}
        />
      </Post>
      <Post heading="Uttag" rows={salary.rows}>
        <SalaryParameters
          data={salary}
          setData={(data) => dispatch({ post: 'salary', payload: data })}
        />
      </Post>
      <Post heading="Andra utgifter" rows={expenses.rows} />
      <Result title="Bruttoresultat" value={result.gross} />
      <Post heading="" noSum rows={result.rows} />
      <Result title={'Nettoresultat'} value={result.net} />
    </Tabular>
  );
}
