import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    th,
    td {
        padding: var(--space-xs) var(--space-md);
        text-align: left;
        // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    thead > tr {
        background: var(--color-primary);
        color: #fff;
        font-weight: semibold;
        text-transform: uppercase;
        font-size: var(--text-sm);
    }

    tbody > tr {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        transition: all 0.25s ease-in-out;
    }
    tbody > tr:hover {
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
        transform: scale(1.075);
        background: #fff;
    }

    tbody > tr:last-child {
        font-weight: 700;
        border: none;
        border-top: 2px solid rgba(0, 0, 0, 0.9) !important;
    }
`;

export default function Table(props) {
    const { headings, rows, formatKeyText, formatValueText } = props;
    return (
        <StyledTable>
            <thead>
                <tr>
                    {headings.map((heading, i) => (
                        <th key={`heading-${heading}-${i}`}>{heading}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Object.keys(rows).map((key, index) => (
                    <tr key={`ic-${key}-${index}`}>
                        <td>{formatKeyText(key)}</td>
                        <td>{formatValueText(rows[key])}</td>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
}
