import { type } from './expenseAction';

const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case type.EXPENSE:
      return [
        ...state,
        {
          id: action.peyload.id,
          name: action.peyload.name,
          amount: action.peyload.amount,
        },
      ];
    case type.REMOVE:
      return state.filter(item => item.id !== action.peyload);

    default:
      return state;
  }
};

export default expenseReducer;
