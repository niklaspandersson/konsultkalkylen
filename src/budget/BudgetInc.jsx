import Tabular from './Tabular';
import Post from './Post';
import Result from './ResultRow';
import IncomeParameters from './income/IncomeParameters';
import SalaryParameters from './salary/SalaryParameters';
import calcResult from './result/calcResultInc';
import { useMemo } from 'react';

export default function BudgetInc({ state, dispatch }) {
  const result = useMemo(() => calcResult(state), [state]);
  const { income, salary, expenses } = state;

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
      <Result title={'Nettoresultat'} value={result.net} />
    </Tabular>
  );
}
