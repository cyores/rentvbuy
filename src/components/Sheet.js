import React, { Component } from "react";
import { formatCurrency, formatKeyText } from "../utils";
import styled from "styled-components";

// components
import AreaGraph from "./AreaGraph";
import Table from "./utils/Table";

const StyledSheet = styled.div`
    background-color: #fff;
    padding: var(--space-md);
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
                <h3>{this.props.title}</h3>
                {this.props.subtitle ? (
                    <h6 style={{ margin: 0 }}>
                        <em>{this.props.subtitle}</em>
                    </h6>
                ) : null}

                <hr></hr>
                <div>
                    <div style={{ minHeight: "30vh" }}>
                        <h5>Initial Costs</h5>
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
                    <div style={{ minHeight: "37vh" }}>
                        <h5>Monthly Costs</h5>
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
                    <div style={{ minHeight: "30vh" }}>
                        <h5>After {period} Years</h5>
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
                                <div style={{ height: "33vh" }}>
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
