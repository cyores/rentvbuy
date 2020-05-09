import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  background: transparent;
  margin: 0 var(--spacing-sm);
  cursor: pointer;
  &:hover {
    background: var(--color-primary);
    color: var(--color-bg);
  }
  &:active {
    box-shadow: inset 0 0 0 100vh rgba(0, 0, 0, 0.1);
  }
`;

export default function Button(props) {
  return (
    <StyledButton onClick={() => console.log('button clicked')}>
      {props.children}
    </StyledButton>
  );
}
