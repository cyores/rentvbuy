import React from 'react';
import styled from 'styled-components';

const ColCenter = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
`;

const ColLeft = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
`;

const ColRight = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: flex-end;
`;

export default function Col(props) {
  if (props.center) return <ColCenter {...props} />;
  else if (props.right) return <ColRight {...props} />;
  else return <ColLeft {...props} />;
}
