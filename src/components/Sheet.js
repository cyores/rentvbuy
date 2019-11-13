import React, { Component } from "react";
import { formatCurrency, formatKeyText } from "../utils";
import styled from "styled-components";

// components
import AreaGraph from "./AreaGraph";
import Table from "./utils/Table";

const StyledSheet = styled.div`
    background-color: #fff;
    padding: var(--space-xxxxs) var(--space-md);
    margin-bottom: var(--space-md);
`;

class Sheet extends Component {
    render() {
        const {
            initialCosts,
            monthlyCosts,
            afterPeriod,
            // type,
            period
        } = this.props;
        return (
            <StyledSheet>
                <h5>{this.props.title}</h5>
                {this.props.subtitle ? (
                    <small style={{ margin: 0 }}>
                        <em>{this.props.subtitle}</em>
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
                            />
                        </div>
                    </div>
                </div>
                {this.props.graphData ? (
                    <>
                        <div>
                            <div>
                                <h5>Property Value Over Time</h5>
                                <div style={{ height: "28vh" }}>
                                    <AreaGraph data={this.props.graphData} />
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </StyledSheet>
        );
    }
}

export default Sheet;
