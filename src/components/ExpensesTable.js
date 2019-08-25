import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { removeExpense } from '../redux/expenseRedux/expenseAction';
import getExpenses from '../redux/expenseRedux/expenseSelectors';
import Button from './shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], onRemove }) => (
  <Table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ name, amount, id }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => onRemove(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

const mapStateToProps = state => ({
  items: getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => {
    return dispatch(removeExpense(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);

ExpensesTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
};
