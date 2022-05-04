import { useReducer } from "react";
import incomeReducer, { InitialState as InitialIncomeState } from './income/reducer';
import salaryReducer, { InitialState as InitialSalaryState } from './salary/reducer';
import expensesReducer, { InitialState as InitialExpensesState } from './expenses/reducer';

const CorporateTax = 0.206;

const InitialState = {
  income: InitialIncomeState,
  salary: InitialSalaryState,
  expenses: InitialExpensesState,
}
InitialState.result = calcResult(InitialState);

const reducers = {
  income: incomeReducer,
  salary: salaryReducer,
  expenses: expensesReducer,
}

function calcResult(data) {
  const allRows = Object.values(data).flatMap(post => post.rows);
  const grossResult = allRows.reduce((sum, row) => sum + (row.units*row.unitPrice), 0);
  console.log(grossResult);
  return {
    rows: [
      {
        title: 'Bruttoresultat',
        units: 1,
        unitPrice: grossResult,
      },
      {
        title: `Bolagsskatt (${Math.round(CorporateTax * 10000) / 100}% av vinst)`,
        units: 1,
        unitPrice: -Math.round(Math.max(0,grossResult) * CorporateTax),
      },
    ]
  }
}
function reducer(prev, action) {
  const post = action.post;
  if(reducers[post]) {
    const newPost = reducers[post](prev[post], action);
    if(newPost !== prev[post]) {
      const next = {
        ...prev,
        [post]: newPost
      };

      delete next.result;
      next.result = calcResult(next);
    }
  }

  return prev;
}

const useCalculation = () => {
  return useReducer(reducer, InitialState);
}

export default useCalculation;