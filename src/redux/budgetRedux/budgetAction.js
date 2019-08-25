export const type = {
  BUDGET: 'BUDGET',
};

export const setBudget = value => {
  return {
    type: type.BUDGET,
    peyload: value,
  };
};
