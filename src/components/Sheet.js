import React from "react";
import { formatCurrency, formatKeyText } from "../utils";
import styled from "styled-components";

// components
import Table from "./utils/Table";

const StyledSheet = styled.div`
    background-color: #fff;
    padding: var(--space-xxxxs) var(--space-md);
    margin-bottom: var(--space-md);
`;

export default function Sheet(props) {
    const {
        initialCosts,
        monthlyCosts,
        afterPeriod,
        period,
        title,
        subtitle,
        graphData
    } = props;

    return (
        <StyledSheet>
            <h5>{title}</h5>
            {subtitle ? (
                <small style={{ margin: 0 }}>
                    <em>{subtitle}</em>
                </small>
            ) : null}

            <hr></hr>
            <div>
                <div style={{ minHeight: "24vh" }}>
                    <h6>Initial Costs</h6>
                    <div style={{ paddingTop: "0" }}>
                        <Table
                            headings={["Item", "Amount"]}
                            rows={initialCosts}
                            formatKeyText={formatKeyText}
                            formatValueText={formatCurrency}
                            // graphData={graphData.initialCosts}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div style={{ minHeight: "28vh" }}>
                    <h6>Monthly Costs</h6>
                    <div style={{ paddingTop: "0" }}>
                        <Table
                            headings={["Item", "Amount"]}
                            rows={monthlyCosts}
                            formatKeyText={formatKeyText}
                            formatValueText={formatCurrency}
                            graphData={graphData.monthlyCosts}
                        />
                    </div>
                </div>
            </div>
            <div>
                <div style={{ minHeight: "24vh" }}>
                    <h6>After {period} Years</h6>
                    <div style={{ paddingTop: "0" }}>
                        <Table
                            headings={["Item", "Amount"]}
                            rows={afterPeriod}
                            formatKeyText={formatKeyText}
                            formatValueText={formatCurrency}
                            graphData={graphData.afterPeriod}
                        />
                    </div>
                </div>
            </div>
        </StyledSheet>
    );
}
