import { useMemo } from 'react';
import Tabular from './Tabular';
import Result from './ResultRow';
import Post from './Post';
import IncomeParameters from './income/IncomeParameters';
import PensionParameters from './privatePension/Parameters';
import calcResult from './result/calcPrivateResult';

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
      <Post heading="Utgifter" rows={expenses.rows} />
      <Post heading="Pension" rows={privatePension.rows}>
        <PensionParameters
          data={privatePension}
          setData={(data) =>
            dispatch({ post: 'privatePension', payload: data })
          }
        />
      </Post>
      <Result title="Bruttoresultat" value={result.gross} />
      <Post heading="" noSum rows={result.rows} />
      <Result title={'Nettoresultat'} value={result.net} />
    </Tabular>
  );
}
