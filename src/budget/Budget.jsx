import useCalculation from "./useBudgetCalculation";
import Tabular from "./Tabular";
import Post from "./Post";
import IncomeParameters from "./income/IncomeParameters";

export default function Budget() {
  const [{ income, salary, result, expenses }, dispatch] = useCalculation();

  return (
    <Tabular>
      <Post heading="Inkomster" rows={income.rows}>
        <IncomeParameters
          data={income}
          setData={(data) => dispatch({ post: "income", payload: data })}
        />
      </Post>
      <Post heading="Uttag" rows={salary.rows} />
      <Post heading="Andra utgifter" rows={expenses.rows} />
      <Post heading="Rörelseresultat" rows={result.rows} />
    </Tabular>
  );
}
