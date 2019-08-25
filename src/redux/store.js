import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import expenseReducer from './expenseRedux/expenseReducer';
import budgetReducer from './budgetRedux/budgetReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expenseReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
