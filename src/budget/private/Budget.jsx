import { useMemo } from 'react';
import Tabular from '../Tabular';
import Result from '../ResultRow';
import Post from '../Post';
import ExpensesParameters from '../expenses/Parameters';
import IncomeParameters from '../income/Parameters';
import PensionParameters from './pension/Parameters';
import calcResult from './calcResult';

export default function Budget({ state, dispatch }) {
  const result = useMemo(() => calcResult(state), [state]);
  const { income, expenses, privatePension } = state;

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
      <Post heading="Pension" rows={privatePension.rows}>
        <PensionParameters
          data={privatePension}
          setData={(data) =>
            dispatch({ post: 'privatePension', payload: data })
          }
        />
      </Post>
      <Result title="Resultat" value={result.gross} />
      <Post heading="" noSum rows={result.rows} />
      <Result title={'Nettoresultat'} value={result.net} />
    </Tabular>
  );
}
