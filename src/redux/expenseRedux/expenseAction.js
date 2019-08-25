export const type = {
  EXPENSE: 'EXPENSE',
  REMOVE: 'REMOVE',
};

export const setExpense = value => {
  return {
    type: type.EXPENSE,
    peyload: value,
  };
};

export const removeExpense = id => {
  return {
    type: type.REMOVE,
    peyload: id,
  };
};
