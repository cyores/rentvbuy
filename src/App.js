import React from 'react';
import styled from 'styled-components';

// components
import Row from './components/prims/Row';
import Col from './components/prims/Col';
import LeftPanel from './components/LeftPanel';

export default function App() {
  return (
    <Row style={{ height: '100vh' }}>
      <Col style={{ flex: 0.25 }}>
        <LeftPanel />
      </Col>
      <Col style={{ flex: 0.75 }}></Col>
    </Row>
  );
}
