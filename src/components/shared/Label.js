import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  color: #171718;
  cursor: pointer;
  ${props => props.customStyles}
`;

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

export default Label;

Label.propTypes = {
  customStyles: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.element.isRequired,
};
