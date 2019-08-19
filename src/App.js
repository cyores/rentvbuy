import React from "react";

import "./app.css";

// Components
import Button from "./components/Button";
// import TextInput from "./components/TextInput";
import Sheet from "./components/Sheet";
import CollectInfo from "./components/CollectInfo";
import Verdict from "./components/Verdict";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            advanced: false,
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
            donecalcs: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    calculate() {
        let s = this.state;
        s.calcs.downpayment = parseFloat((s.VOP * s.DP).toFixed(2));
        s.calcs.rent = parseFloat(s.RENT.toFixed(2));

        if (s.TAX > 0) {
            s.calcs.taxes = s.TAX / 12;
        } else {
            s.calcs.taxes = (s.VOP * 0.01) / 12; // asume taxes at 1% of VOP
        }
        s.calcs.taxes = parseFloat(s.calcs.taxes.toFixed(2));

        if (s.CF > 0) {
            console.log("m", (s.VOP * 0.005) / 12);
            console.log("cf", s.CF);
            s.calcs.maint = s.CF + (s.VOP * 0.005) / 12;
        } else {
            s.calcs.maint = (s.VOP * 0.01) / 12; // assume maintenance of 1% if no condo fee
        }
        s.calcs.maint = parseFloat(s.calcs.maint.toFixed(2));

        s.calcs.percentRule = parseFloat(
            (
                (s.VOP * (s.SMA - s.REA)) / 12 +
                s.calcs.maint +
                s.calcs.taxes
            ).toFixed(2)
        );

        if (s.calcs.percentRule < s.calcs.rent) {
            s.calcs.buy = true;
        } else {
            s.calcs.buy = false;
        }

        s.calcs.donecalcs = true;
        this.setState({ calcs: s.calcs });
    }

    handleChange(input, metric) {
        console.log(input.target.value, metric);
        let s = this.state;
        s[metric] = parseFloat(input.target.value);
        this.setState({ metric: s[metric] });
    }

    toggleAdv() {
        let s = this.state;
        s.advanced = !s.advanced;
        this.setState({ advanced: s.advanced });
    }

    render() {
        return (
            <React.Fragment>
                <div className="row u-full-height">
                    <div className="four columns u-full-height">
                        <div className="bg-grad p-2 u-full-height" style={{ position: "fixed" }}>
                            <h3 className="fancy-underline">Rent vs Buy</h3>
                            <CollectInfo
                                handleChange={this.handleChange}
                                advanced={this.state.advanced}
                                VOP={this.state.VOP}
                                RENT={this.state.RENT}
                                TAX={this.state.TAX}
                                CF={this.state.CF}
                                MR={this.state.MR}
                                DP={this.state.DP}
                                AP={this.state.AP}
                                REA={this.state.REA}
                                SMA={this.state.SMA}
                            />
                            <Button
                                type="button"
                                className="button-primary"
                                text="Calculate"
                                onPress={() => this.calculate()}
                            />
                            <Footer />
                        </div>
                    </div>
                    <div className="eight columns p-2" style={{ margin: "2%" }}>
                        {this.state.calcs.donecalcs ? (
                            <React.Fragment>
                                <div className="row">
                                    <Verdict buy={this.state.calcs.buy} />
                                </div>
                                <div className="row">
                                    <div className="six columns" style={{height: "120vh"}}>
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
