import React from "react";
import styled from "styled-components";

import "./app.css";

import contentPlaceholder from "./images/undraw_buy_house.svg";

// Components
import About from "./components/About";
import Help from "./components/Help";
import Sheet from "./components/Sheet";
import Verdict from "./components/Verdict";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import AreaGraph from "./components/AreaGraph";
import Flex from "./components/utils/Flex";

const GraphWrapper = styled.div`
    height: 40vh;
    background: white;
    padding: var(--space-md);
    margin-bottom: var(--space-md);
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            VOP: 0, // value of property
            RENT: 0, // rent
            PTR: 1.0, // property tax rate
            LTT: 0, // Land Transfer Tax
            CF: 0, // condo fee
            MR: 3.0, // mortgage rate
            DP: 30, // down payment percentage
            AP: 25, // amortization period
            REA: 0.03, // real estate appriciation
            SMA: 0.06, // stock market appriciation
            calcs: {
                buy: {
                    Mortgage_Principle: 0,
                    initialCosts: {
                        Downpayment: 0,
                        Land_Transfer_Tax: 0,
                        Total: 0
                    },
                    monthlyCosts: {
                        Taxes: 0,
                        Maintenance: 0,
                        Mortgage_Payment: 0,
                        Total: 0
                    },
                    afterPeriod: {
                        Property_Value: 0,
                        Total_Sunk_Costs: 0,
                        Net: 0
                    },
                    analysis: {
                        Difference_To_Rent: 0
                    }
                },
                rent: {
                    initialCosts: {
                        Stock_Investment: 0,
                        Total: 0
                    },
                    monthlyCosts: {
                        Rent: 0,
                        Total: 0
                    },
                    afterPeriod: {
                        Investments_Value: 0,
                        Total_Sunk_Costs: 0,
                        Net: 0
                    },
                    analysis: {
                        Difference_To_Buy: 0
                    }
                },

                percentRule: 0,
                rentOrBuy: "",
                donecalcs: false
            },
            view: "calculator"
        };
        this.receiveFromCalculator = this.receiveFromCalculator.bind(this);
        this.changeView = this.changeView.bind(this);
    }

    receiveFromCalculator(s) {
        this.setState(s);
        console.log("app state", this.state);
    }

    changeView(view) {
        this.setState({ view: view });
    }

    render() {
        return (
            <Flex>
                <div
                    className="bg-grad"
                    style={{ flex: "25", height: "100vh" }}
                >
                    <Flex
                        dir="col"
                        style={{ justifyContent: "flex-start", height: "100%" }}
                    >
                        <div>
                            <h3 className="fancy-underline">Rent vs Buy</h3>
                            {this.state.view === "calculator" ? (
                                <Calculator
                                    defaultState={this.state}
                                    sendToApp={this.receiveFromCalculator}
                                />
                            ) : null}
                            {this.state.view === "about" ? <About /> : null}
                            {this.state.view === "help" ? <Help /> : null}
                        </div>
                        <div style={{ marginTop: "auto" }}>
                            <Footer />
                        </div>
                    </Flex>
                </div>

                <div style={{ flex: "75", minHeight: "100vh" }}>
                    <Flex
                        dir="col"
                        style={{ height: "100%", padding: "var(--space-md)" }}
                    >
                        {this.state.calcs.donecalcs ? (
                            <>
                                <Flex>
                                    <Verdict
                                        rentOrBuy={this.state.calcs.rentOrBuy}
                                    />
                                </Flex>
                                <Flex>
                                    <div style={{ flex: "1" }}>
                                        <h5 style={{ marginTop: 0 }}>
                                            Rent vs Buy Net Value Over Time
                                        </h5>
                                        <GraphWrapper>
                                            <AreaGraph
                                                data={[
                                                    this.state.calcs.buy
                                                        .graphData.net,
                                                    this.state.calcs.rent
                                                        .graphData.net
                                                ]}
                                            ></AreaGraph>
                                        </GraphWrapper>
                                    </div>
                                </Flex>
                                <Flex>
                                    <div style={{ flex: "50" }}>
                                        <Sheet
                                            type={"buy"}
                                            title={"Buy"}
                                            subtitle={
                                                "5% Rule: $" +
                                                this.state.calcs.percentRule
                                            }
                                            initialCosts={
                                                this.state.calcs.buy
                                                    .initialCosts
                                            }
                                            monthlyCosts={
                                                this.state.calcs.buy
                                                    .monthlyCosts
                                            }
                                            period={this.state.AP}
                                            afterPeriod={
                                                this.state.calcs.buy.endValue
                                            }
                                            // graphData={[
                                            //     this.state.calcs.graphData
                                            //         .propertyValue,
                                            //     this.state.calcs.graphData
                                            //         .buySunkCosts
                                            // ]}
                                        ></Sheet>
                                    </div>
                                    <div style={{ flex: "50" }}>
                                        <Sheet
                                            type={"rent"}
                                            title={"Rent"}
                                            subtitle={
                                                "Assumption: the downpayment is invested in the stock market."
                                            }
                                            initialCosts={
                                                this.state.calcs.rent
                                                    .initialCosts
                                            }
                                            monthlyCosts={
                                                this.state.calcs.rent
                                                    .monthlyCosts
                                            }
                                            period={this.state.AP}
                                            afterPeriod={
                                                this.state.calcs.rent.endValue
                                            }
                                        ></Sheet>
                                    </div>
                                </Flex>
                            </>
                        ) : (
                            <>
                                <div
                                    style={{
                                        display: "flex",
                                        flexFlow: "column",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <div>
                                        <img
                                            alt=""
                                            src={contentPlaceholder}
                                            width="500px"
                                            height="auto"
                                            style={{
                                                opacity: "0.9",
                                                margin: "2rem"
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p>
                                            Fill out the details to the left to
                                            see a full analysis of the Rent Vs
                                            Buy decision
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </Flex>
                </div>
            </Flex>
        );
    }
}

export default App;
