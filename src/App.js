import React from "react";

import "./app.css";

// Components
import About from "./components/About";
import Help from "./components/Help";
import Button from "./components/Button";
// import TextInput from "./components/TextInput";
import Sheet from "./components/Sheet";
import CollectInfo from "./components/CollectInfo";
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
            MR: 0.03, // mortgage rate
            DP: 0.3, // down payment percentage
            AP: 25, // amortization period
            REA: 0.03, // real estate appriciation
            SMA: 0.06, // stock market appriciation
            calcs: {
                downpayment: 0,
                taxes: 0,
                maint: 0,
                rent: 0,
                percentRule: 0,
                rentOrBuy: null
            },
            donecalcs: false,
            view: "calculator"
        };
        this.receiveFromCalculator = this.receiveFromCalculator.bind(this);
        this.changeView = this.changeView.bind(this);
    }

    receiveFromCalculator(numbers) {
        this.setState(numbers);
    }

    changeView(view) {
        this.setState({ view: view });
    }

    render() {
        return (
            <React.Fragment>
                <div className="left-panel bg-grad p-2">
                    <h3 className="fancy-underline">Rent vs Buy</h3>
                    {this.state.view === "calculator" ? (
                        <Calculator defaultState={this.state} sendToApp={this.receiveFromCalculator} />
                    ) : null}
                    {this.state.view === "about" ? <About /> : null}
                    {this.state.view === "help" ? <Help /> : null}
                    <Footer
                        view={this.state.view}
                        changeView={this.changeView}
                    />
                </div>
                <div className="row u-full-height">
                    <div className="four columns p-2 u-full-height" />
                    <div
                        className="eight columns p-2 u-full-height"
                        style={{ margin: "2%" }}
                    >
                        {this.state.calcs.donecalcs ? (
                            <React.Fragment>
                                <div className="row">
                                    <Verdict buy={this.state.calcs.buy} />
                                </div>
                                <div className="row">
                                    <div
                                        className="six columns"
                                        style={{ height: "120vh" }}
                                    >
                                        <Sheet title={"Buy"}>
                                            <p>
                                                Downpayment:{" "}
                                                {this.state.calcs.downpayment}
                                            </p>
                                            <p>
                                                Taxes: {this.state.calcs.taxes}
                                                /month
                                            </p>
                                            <p>
                                                Maintenance:{" "}
                                                {this.state.calcs.maint}
                                                /month
                                            </p>
                                            <p style={{ margin: 0 }}>
                                                Percent Rule:{" "}
                                                {this.state.calcs.percentRule}
                                                /month
                                            </p>
                                        </Sheet>
                                    </div>
                                    <div className="six columns">
                                        <Sheet title={"Rent"}>
                                            <p>
                                                Rent: {this.state.calcs.rent}
                                                /month
                                            </p>
                                        </Sheet>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : null}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
