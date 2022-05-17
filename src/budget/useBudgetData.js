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

const reducer = combineReducers({
  income: incomeReducer,
  salary: salaryReducer,
  privatePension: privatePensionReducer,
  expenses: expensesReducer,
});

const useBudgetData = () => {
  return useReducer(reducer, InitialState);
};

export default useBudgetData;
