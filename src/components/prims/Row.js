import React from 'react';
import styled from 'styled-components';

const RowDefault = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const RowStart = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const RowEnd = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

export default function Row(props) {
  if (props.start) return <RowStart {...props} />;
  else if (props.end) return <RowEnd {...props} />;
  else return <RowDefault {...props} />;
}
