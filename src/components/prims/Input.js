import React from 'react';
import styled from 'styled-components';

// components
import Col from './Col';

const StyledInput = styled.input`
  min-width: 0;
  padding: var(--space-xs);
  outline: none;
  border: 2px solid transparent;
  background: var(--color-bg);
  color: var(--color-text);
  font-size: var(--text-base-size);
  opacity: 0.8;
  transition: var(--transition);
  &:focus {
    opacity: 1;
    border-bottom: 2px solid var(--color-text);
  }
  &:hover {
    opacity: 0.95;
  }
`;

export default function Input(props) {
  const { label } = props;
  return (
    <Col style={{ margin: 'var(--space-sm) var(--space-xs)' }} {...props}>
      <label>{label}</label>
      <StyledInput style={props.inputStyle} />
    </Col>
  );
}
