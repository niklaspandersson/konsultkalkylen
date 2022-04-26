import { useReducer } from "react";
import { InitialState as InitialIncomeState, summary as incomeSummary } from './income/data';
import { InitialState as InitialSalaryState, summary as salarySummary } from './salary/data';

const InitialState = {
  income: InitialIncomeState,
  salary: InitialSalaryState,
}

const summaryCalc = {
  income: incomeSummary,
  salary: salarySummary,
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