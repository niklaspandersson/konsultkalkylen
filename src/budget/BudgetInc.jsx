import useCalculation from './useBudgetCalculation';
import Tabular from './Tabular';
import Post from './Post';
import Result from './ResultRow';
import IncomeParameters from './income/IncomeParameters';
import SalaryParameters from './salary/SalaryParameters';
import calcResult from './result/calcResultInc';

export default function Budget() {
  const [{ income, salary, result, expenses }, dispatch] =
    useCalculation(calcResult);

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
      <Post heading="Utgifter" rows={expenses.rows} />
      <Result title="Bruttoresultat" value={result.gross} />
      <Post heading="" noSum rows={result.rows} />
      <Result title={'Nettoresultat'} value={result.net} />
    </Tabular>
  );
}
