import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + Number(expense.amount), 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

class App extends Component {
  removeExpense = id => {
    this.setState(state => ({
      expenses: state.expenses.filter(expense => expense.id !== id),
    }));
  };

  render() {
    const { budget, expenses } = this.props;
    const totalExpenses = calculateTotalExpenses(expenses);
    const balance = calculateBalance(budget, totalExpenses);

    return (
      <Container>
        <BudgetForm onSave={this.saveBudget} />
        <Values expenses={totalExpenses} balance={balance} />
        <ExpenseForm />
        {expenses.length > 0 && (
          <ExpensesTable items={expenses} onRemove={this.removeExpense} />
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  expenses: state.expenses,
  budget: state.budget.budget,
});

export default connect(mapStateToProps)(App);

App.propTypes = {
  budget: PropTypes.shape({
    budget: PropTypes.number,
  }).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.number).isRequired,
};
