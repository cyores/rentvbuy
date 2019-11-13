import React, { Component } from "react";
import styled from "styled-components";

// components
import AreaGraph from "./AreaGraph";
import Flex from "./utils/Flex";
import Table from "./utils/Table";

const StyledSheet = styled.div`
    background-color: #fff;
    padding: var(--space-md);
    margin-bottom: var(--space-md);
`;

class Sheet extends Component {
    formatKeyText(key) {
        while (key.includes("_")) {
            key = key.replace("_", " ");
        }
        return key;
    }

    // format the float into a currency string
    // ex: 12345 => $12,345.00
    // thanks: https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-currency-string-in-javascript
    formatCurrency(num) {
        const negativeSign = num < 0 ? "-" : "";
        num = Math.abs(num);
        let splitNum = num.toString().split(".");
        let dollars = splitNum[0];
        let cents = splitNum.length > 1 ? splitNum[1] : "00";
        let firstComma = dollars.length > 3 ? dollars.length % 3 : 0;

        return (
            negativeSign +
            "$" +
            (firstComma ? dollars.substr(0, firstComma) + "," : "") +
            dollars.substr(firstComma).replace(/(\d{3})(?=\d)/g, "$1,") +
            "." +
            cents
        );
    }

    render() {
        const {
            initialCosts,
            monthlyCosts,
            afterPeriod,
            type,
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
                                formatKeyText={this.formatKeyText}
                                formatValueText={this.formatCurrency}
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
                                formatKeyText={this.formatKeyText}
                                formatValueText={this.formatCurrency}
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
                                formatKeyText={this.formatKeyText}
                                formatValueText={this.formatCurrency}
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
