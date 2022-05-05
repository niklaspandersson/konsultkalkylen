import { useReducer } from "react";
import incomeReducer, {
  InitialState as InitialIncomeState,
} from "./income/reducer";
import salaryReducer, {
  InitialState as InitialSalaryState,
} from "./salary/reducer";
import expensesReducer, {
  InitialState as InitialExpensesState,
} from "./expenses/reducer";
import calcResult from "./result/calcResult";

const InitialState = {
  income: InitialIncomeState,
  salary: InitialSalaryState,
  expenses: InitialExpensesState,
};
InitialState.result = calcResult(InitialState);

const reducers = {
  income: incomeReducer,
  salary: salaryReducer,
  expenses: expensesReducer,
};

function reducer(prev, action) {
  const post = action.post;
  if (reducers[post]) {
    const newPost = reducers[post](prev[post], action);
    if (newPost !== prev[post]) {
      const next = {
        ...prev,
        [post]: newPost,
      };

      delete next.result;
      next.result = calcResult(next);
      return next;
    }
  }

  return prev;
}

const useBudgetCalculation = () => {
  return useReducer(reducer, InitialState);
};

export default useBudgetCalculation;
