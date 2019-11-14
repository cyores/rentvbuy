import React from "react";
import styled from "styled-components";

const StyledVerdict = styled.div`
    background: var(--color-a-c-gradient);
    padding: var(--space-md);
    margin-bottom: var(--space-md);
    text-align: center;
    width: 100%;
    z-index: -1;
`;

export default function Verdict(props) {
    return (
        <StyledVerdict>
            <h4 style={{ margin: 0 }}>
                You should <b className="fancy-underline">{props.rentOrBuy}</b>
            </h4>
        </StyledVerdict>
    );
}
