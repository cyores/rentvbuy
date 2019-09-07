import React from "react";

import "./app.css";

import contentPlaceholder from "./images/undraw_buy_house.svg";

// Components
import About from "./components/About";
import Help from "./components/Help";
import Sheet from "./components/Sheet";
import Verdict from "./components/Verdict";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            VOP: 0, // value of property
            RENT: 0, // rent
            TAX: 0, // annual property taxes
            CF: 0, // condo fee
            MR: 3.0, // mortgage rate
            DP: 30, // down payment percentage
            AP: 25, // amortization period
            REA: 0.035, // real estate appriciation
            SMA: 0.06, // stock market appriciation
            calcs: {
                buy: {
                    Mortgage_Principle: 0,
                    initialCosts: {
                        Downpayment: 0
                    },
                    monthlyCosts: {
                        Taxes: 0,
                        Maintenance: 0,
                        Mortgage_Payment: 0,
                        Difference_To_Rent: 0,
                        Total: 0
                    },
                    afterPeriod: {
                        Property_Value: 0,
                        Total_Sunk_Costs: 0,
                        Net: 0
                    }
                },
                rent: {
                    initialCosts: {
                        Stock_Investment: 0
                    },
                    monthlyCosts: {
                        Rent: 0,
                        Difference_To_Buy: 0,
                        Total: 0
                    },
                    afterPeriod: {
                        Investments_Value: 0,
                        Total_Sunk_Costs: 0,
                        Net: 0
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

    receiveFromCalculator(calcs) {
        this.setState({ calcs: calcs });
        console.log("app state", this.state);
    }

    changeView(view) {
        this.setState({ view: view });
    }

    render() {
        return (
            <React.Fragment>
                <div className="left-panel bg-grad" style={{ width: "33vw" }}>
                    <div className="p-2">
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
                    <Footer
                        view={this.state.view}
                        changeView={this.changeView}
                    />
                </div>
                <div className="u-full-height" style={{ marginLeft: "33vw" }}>
                    {/* <div className="four columns p-2 u-full-height" /> */}
                    <div className="p-5 u-full-height">
                        {this.state.calcs.donecalcs ? (
                            <React.Fragment>
                                <div className="row">
                                    <div className="u-full-width">
                                        <Verdict
                                            rentOrBuy={
                                                this.state.calcs.rentOrBuy
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="six columns">
                                        <Sheet
                                            type={"buy"}
                                            title={"Buy"}
                                            // subtitle={
                                            //     "5% Rule: $" +
                                            //     this.state.calcs.percentRule
                                            // }
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
                                                this.state.calcs.buy.afterPeriod
                                            }
                                        ></Sheet>
                                    </div>
                                    <div className="six columns">
                                        <Sheet
                                            type={"rent"}
                                            title={"Rent"}
                                            // subtitle={
                                            //     "Assumption: the downpayment is invested in the stock market."
                                            // }
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
                                                this.state.calcs.rent
                                                    .afterPeriod
                                            }
                                        ></Sheet>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : (
                            <>
                                <div
                                    className="u-full-height"
                                    style={{
                                        display: "flex",
                                        flexFlow: "column",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <div>
                                        <img
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
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
