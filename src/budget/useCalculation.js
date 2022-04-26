import { useReducer } from "react";
import { InitialState as InitialIncomeState, summary as incomeSummary } from './income/data';
import { InitialState as InitialSalaryState, summary as salarySummary } from './salary/data';
import { InitialState as InitialExpensesState, summary as expensesSummary } from './expenses/data';

const InitialState = {
  income: InitialIncomeState,
  salary: InitialSalaryState,
  expenses: InitialExpensesState,
}

const summaryCalc = {
  income: incomeSummary,
  salary: salarySummary,
  expenses: expensesSummary,
}

for(const part in summaryCalc)
  InitialState[part].summary = summaryCalc[part](InitialState[part]);

function reducer(prev, { part, data }) {
  const newState = {...prev };
  newState[part] = { ...prev[part], ...data };

  if(summaryCalc[part])
    newState[part].summary = summaryCalc[part](newState[part]);

  return newState;
}

const useCalculation = () => {
  console.log(InitialState);
  return useReducer(reducer, InitialState);
}

export default useCalculation;