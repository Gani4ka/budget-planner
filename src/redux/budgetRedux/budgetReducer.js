import { type } from './budgetAction';

const initialState = {
  budget: 0,
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.BUDGET:
      return { ...state, budget: action.peyload };
    default:
      return state;
  }
};

export default budgetReducer;
