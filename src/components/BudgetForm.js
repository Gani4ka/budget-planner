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
    budgetValue: 0,
  };

  onChange = value => {
    this.setState({
      budgetValue: value,
    });
  };

  clearInput = () =>
    this.setState({
      budgetValue: 0,
    });

  render() {
    const { onSubmit } = this.props;
    const { budgetValue } = this.state;
    return (
      <Form onSubmit={e => onSubmit(e, budgetValue)}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={budgetValue}
            onChange={event => this.onChange(event.target.value)}
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

const mapDistatchToProps = dispatch => ({
  onSubmit: (e, text) => {
    e.preventDefault();
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
