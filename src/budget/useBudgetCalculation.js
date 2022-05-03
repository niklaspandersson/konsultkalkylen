import { useReducer } from "react";
import incomeReducer, { InitialState as InitialIncomeState } from './income/reducer';
import salaryReducer, { InitialState as InitialSalaryState } from './salary/reducer';
import expensesReducer, { InitialState as InitialExpensesState } from './expenses/reducer';

const InitialState = {
  income: InitialIncomeState,
  salary: InitialSalaryState,
  expenses: InitialExpensesState,
}

const reducers = {
  income: incomeReducer,
  salary: salaryReducer,
  expenses: expensesReducer,
}

function reducer(prev, action) {
  const post = action.post;
  if(reducers[post]) {
    const newPost = reducers[post](prev[post], action);
    if(newPost !== prev[post]) {
      return {
        ...prev,
        [post]: newPost
      };
    }
  }

  return prev;
}

const useCalculation = () => {
  return useReducer(reducer, InitialState);
}

export default useCalculation;