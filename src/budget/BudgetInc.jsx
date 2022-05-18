import { useMemo } from 'react';
import { TableCell, TableRow } from '@mui/material';
import Tabular from './Tabular';
import Post from './Post';
import Result from './ResultRow';
import IncomeParameters from './income/Parameters';
import SalaryParameters from './inc/salary/Parameters';
import calcResult from './inc/calcResult';
import calcEarnings from './inc/calcEarnings';
import PrivateEarnings from './inc/PrivateEarnings';

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
      <Post heading="Utgifter" rows={expenses.rows} />
      <Post heading="Lön och tjänstepension" rows={salary.rows}>
        <SalaryParameters
          data={salary}
          setData={(data) => dispatch({ post: 'salary', payload: data })}
        />
      </Post>
      <Result title="Bruttoresultat" value={result.gross} />
      <Post heading="" noSum rows={result.rows} />
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
