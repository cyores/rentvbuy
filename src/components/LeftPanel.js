import React from 'react';
import styled from 'styled-components';

// components
import Row from './prims/Row';
import Col from './prims/Col';
import Input from './prims/Input';
import Button from './prims/Button';

const Panel = styled.div`
  position: absolute;
  height: 100vh;
  width: 25%;
  background: var(--color-primary);
  padding: 0 var(--space-sm);
`;

export default function LeftPanel(props) {
  return (
    <Panel>
      <h3>Rent vs Buy</h3>

      <Input type="number" label="Property Value" />

      <Input type="number" label="Monthly Rent" />

      <Row>
        <Input type="number" label="Property Tax Rate (%)" />
        <Input type="number" label="Land Transfer Tax ($)" />
      </Row>

      <Row>
        <Input type="number" label="Mortgage Rate (%)" />

        <Input type="number" label="Down Payment (%)" />
      </Row>

      <Input type="number" label="Amortization Period (years)" />

      <Row>
        <Button onClick={() => console.log('pressed')}>Calculate</Button>
      </Row>
    </Panel>
  );
}
