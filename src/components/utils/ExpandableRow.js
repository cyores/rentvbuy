import React, { useState } from "react";
import styled from "styled-components";

const HiddenTR = styled.tr`
    @keyframes fadeIn {
        from {
            transform: translateY(-10%);
            height: 0;
            opacity: 0;
        }
        to {
            transform: translateY(0%);
            height: 300px;
            opacity: 1;
        }
    }
    height: 300px !important;
    transform: translateY(0%);
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease;
    // to avoid a "jump" when the tr first renders
    animation-delay: -0.16s;
`;

export default function ExpandableRow(props) {
    const [open, setOpen] = useState(false);
    const { values } = props;
    return (
        <>
            <tr style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
                {values.map((value, i) => (
                    <td key={`exprow-${value}-${i}`}>{value}</td>
                ))}
            </tr>
            {open && (
                <HiddenTR>
                    <td colSpan={values.length}>{props.children}</td>
                </HiddenTR>
            )}
        </>
    );
}
