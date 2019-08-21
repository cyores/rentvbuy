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
        s.calcs.downpayment = parseFloat((s.VOP * (s.DP / 100)).toFixed(2));
        s.calcs.rent = parseFloat(s.RENT.toFixed(2));
        const MR = s.MR / 100;

        if (s.TAX > 0) {
            s.calcs.taxes = s.TAX / 12;
        } else {
            s.calcs.taxes = (s.VOP * 0.01) / 12; // asume taxes at 1% of VOP
        }
        s.calcs.taxes = parseFloat(s.calcs.taxes.toFixed(2));

        if (s.CF > 0) {
            s.calcs.maint = s.CF + (s.VOP * 0.005) / 12;
        } else {
            s.calcs.maint = (s.VOP * 0.01) / 12; // assume maintenance of 1% if no condo fee
        }
        s.calcs.maint = parseFloat(s.calcs.maint.toFixed(2));

        s.calcs.mortgagePrinciple = s.VOP - s.calcs.downpayment;

        // PMT=(Pv∗Rate∗(1+Rate)Nper)/[(1+Rate)Nper−1]
        const R = s.MR / 100 / 12;
        const N = -12 * s.AP;
        s.calcs.pmt =
            (s.calcs.mortgagePrinciple * R) / (1 - Math.pow(1 + R, N));
        s.calcs.pmt = parseFloat(s.calcs.pmt.toFixed(2));

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
        this.props.sendToApp(this.state);
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
