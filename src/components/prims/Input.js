import React from 'react';
import styled from 'styled-components';

// components
import Col from './Col';

const StyledInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: var(--space-xs);
  margin-bottom: var(--space-sm);
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
`;

const Label = styled.label`
  margin-top: var(--space-sm);
  margin-left: 1px;
`;

export default function Input(props) {
  const { label } = props;
  return (
    <Col>
      <Label>{label}</Label>
      <StyledInput {...props} />
    </Col>
  );
}
