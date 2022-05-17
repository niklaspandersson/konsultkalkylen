import { useMemo, useReducer } from 'react';
import incomeReducer, {
  InitialState as InitialIncomeState,
} from './income/reducer';
import salaryReducer, {
  InitialState as InitialSalaryState,
} from './salary/reducer';
import privatePensionReducer, {
  InitialState as InitialPrivatePensionState,
} from './privatePension/reducer';
import expensesReducer, {
  InitialState as InitialExpensesState,
} from './expenses/reducer';
import combineReducers from '../combineReducers';

const InitialState = {
  income: InitialIncomeState,
  salary: InitialSalaryState,
  privatePension: InitialPrivatePensionState,
  expenses: InitialExpensesState,
};

const reducers = {
  income: incomeReducer,
  salary: salaryReducer,
  privatePension: privatePensionReducer,
  expenses: expensesReducer,
};

const useBudgetCalculation = (calcResult) => {
  const reducer = useMemo(
    () => combineReducers(reducers, calcResult),
    [calcResult],
  );
  return useReducer(reducer, InitialState, (state) => ({
    ...state,
    result: calcResult(state),
  }));
};

export default useBudgetCalculation;
