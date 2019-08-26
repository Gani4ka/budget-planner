import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import { setBudget } from '../redux/budgetRedux/budgetAction';

const labelStyles = `
  margin-bottom: 16px;
`;

class BudgetForm extends Component {
  state = {
    budgetValue: null,
  };

  onChange = value => {
    this.setState({
      budgetValue: value,
    });
  };

  clearInput = () =>
    this.setState({
      budgetValue: null,
    });

  render() {
    const { onSubmit } = this.props;
    const { budgetValue } = this.state;
    return (
      <Form onSubmit={e => onSubmit(e, budgetValue, this.clearInput)}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={Number(budgetValue)}
            onChange={event => this.onChange(event.target.value)}
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapDistatchToProps = dispatch => ({
  onSubmit: (e, text, clearInput) => {
    e.preventDefault();
    clearInput();
    return dispatch(setBudget(text));
  },
});

export default connect(
  null,
  mapDistatchToProps,
)(BudgetForm);

BudgetForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
