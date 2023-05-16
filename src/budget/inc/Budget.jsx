import { useMemo } from 'react';
import { TableCell, TableRow } from '@mui/material';
import Tabular from '../Tabular';
import Post from '../Post';
import Result from '../ResultRow';
import ExpensesParameters from '../expenses/Parameters';
import IncomeParameters from '../income/Parameters';
import SalaryParameters from './salary/Parameters';
import calcResult from './calcResult';
import calcEarnings from './calcEarnings';
import PrivateEarnings from './PrivateEarnings';

export default function BudgetInc({ state, dispatch }) {
  const { income, expenses, salary } = state;

  const result = useMemo(
    () => calcResult({ income, expenses, salary }),
    [income, expenses, salary],
  );
  const privateEarnings = useMemo(
    () => calcEarnings({ result, salary }),
    [result, salary],
  );

  return (
    <Tabular>
      <Post heading="Inkomster" rows={income.rows}>
        <IncomeParameters
          data={income}
          setData={(data) => dispatch({ post: 'income', payload: data })}
        />
      </Post>
      <Post heading="Utgifter" rows={expenses.rows}>
        <ExpensesParameters
          data={expenses}
          setData={(data) => dispatch({ post: 'expenses', payload: data })}
        />
      </Post>
      <Post heading="Lön och tjänstepension" rows={salary.rows}>
        <SalaryParameters
          data={salary}
          setData={(data) => dispatch({ post: 'salary', payload: data })}
        />
      </Post>
      <Result value={result.gross} />
      <Post noSum rows={result.rows} />
      <Result title="Nettoresultat" value={result.net} />
      <TableRow>
        <TableCell scope="row" colSpan={4}>
          <PrivateEarnings
            {...privateEarnings}
            heading="Privat förtjänst från verksamhet"
          />
        </TableCell>
      </TableRow>
    </Tabular>
  );
}
