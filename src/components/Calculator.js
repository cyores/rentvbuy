import React, { Component } from "react";
import styled from "styled-components";

// components
import Button from "./Button";
import CollectInfo from "./CollectInfo";

const StyledCalculator = styled.div``;

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.defaultState;
        this.handleChange = this.handleChange.bind(this);
    }

    calculate() {
        let s = this.state;

        // the order matters
        s.calcs.buy.initialCosts.downpayment = this.calcDownpayment(s);
        
        s.calcs.rent.initialCosts.stockInvestment = this.calcDownpayment(s);

        s.calcs.rent.monthlyCosts.rent = this.calcMonthlyCostsRent(s);

        s.calcs.buy.monthlyCosts.taxes = this.calcMonthlyCostsTaxes(s);

        s.calcs.buy.monthlyCosts.maint = this.calcMonthlyCostsMaint(s);

        s.calcs.buy.mortgagePrinciple = this.calcMortgagePrinciple(s);

        s.calcs.buy.monthlyCosts.pmt = this.calcMonthlyCostsPMT(s);

        s.calcs.percentRule = this.calcPercentRule(s);

        if (s.calcs.percentRule < s.calcs.rent) {
            s.calcs.rentOrBuy = "buy";
        } else {
            s.calcs.rentOrBuy = "rent";
        }

        s.calcs.donecalcs = true;
        console.log("calcs", s.calcs);
        this.setState({ calcs: s.calcs });
        this.props.sendToApp(s.calcs);
    }

    calcDownpayment(s) {
        return parseFloat((s.VOP * (s.DP / 100)).toFixed(2));
    }

    calcMonthlyCostsRent(s) {
        return parseFloat(s.RENT.toFixed(2));
    }

    calcMonthlyCostsTaxes(s) {
        if (s.TAX > 0) {
            return parseFloat((s.TAX / 12).toFixed(2));
        } else {
            return parseFloat(((s.VOP * 0.01) / 12).toFixed(2)); // assume taxes at 1% of VOP
        }
    }

    calcMonthlyCostsMaint(s) {
        if (s.CF > 0) {
            return parseFloat((s.CF + (s.VOP * 0.005) / 12).toFixed(2));
        } else {
            return parseFloat(((s.VOP * 0.01) / 12).toFixed(2)); // assume maintenance of 1% if no condo fee
        }
    }

    calcMortgagePrinciple(s) {
        return s.VOP - s.calcs.buy.initialCosts.downpayment;
    }

    calcMonthlyCostsPMT(s) {
        // PMT=(Pv∗Rate∗(1+Rate)Nper)/[(1+Rate)Nper−1]
        const R = s.MR / 100 / 12;
        const N = -12 * s.AP;
        return parseFloat(
            (
                (s.calcs.buy.mortgagePrinciple * R) /
                (1 - Math.pow(1 + R, N))
            ).toFixed(2)
        );
    }

    calcPercentRule(s) {
        return parseFloat(
            (
                (s.VOP * (s.SMA - s.REA)) / 12 +
                s.calcs.buy.monthlyCosts.maint +
                s.calcs.buy.monthlyCosts.taxes
            ).toFixed(2)
        );
    }

    handleChange(input, metric) {
        // console.log(input.target.value, metric);
        let s = this.state;
        s[metric] = parseFloat(input.target.value);
        if (Number.isNaN(s[metric])) return;
        this.setState({ metric: s[metric] });
    }

    render() {
        return (
            <StyledCalculator>
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
            </StyledCalculator>
        );
    }
}

export default Calculator;
