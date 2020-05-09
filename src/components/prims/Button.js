import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  // margin: var(--space-xs);
  border: 1px solid var(--color-text);
  color: var(--color-text);
  background: transparent;
  cursor: pointer;
  font-size: var(--text-base-size);
  transition: var(--transition);
  &:hover {
    background: var(--color-text);
    color: var(--color-primary);
  }
  &:active {
    box-shadow: inset 0 0 0 100vh rgba(0, 0, 0, 0.1);
  }
`;

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
