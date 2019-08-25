import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { setExpense } from '../redux/expenseRedux/expenseAction';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';

const labelStyles = `
  margin-bottom: 16px;
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { onSubmit } = this.props;
    const { name, amount } = this.state;
    return (
      <Form onSubmit={e => onSubmit(e, this.state, shortid())}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (e, obj, id) => {
    e.preventDefault();
    // BudgetForm.clearInput();
    return dispatch(setExpense({ ...obj, id }));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);

ExpenseForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
