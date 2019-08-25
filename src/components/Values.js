import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getBudget from '../redux/budgetRedux/budgetSelectors';
import Stat from './Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const mapStateToProps = state => ({
  budget: getBudget(state),
});

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

export default connect(mapStateToProps)(Values);

Values.propTypes = {
  budget: PropTypes.objectOf(PropTypes.number).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  balance: PropTypes.number.isRequired,
};
