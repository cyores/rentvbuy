import React, { Component } from "react";
import styled from "styled-components";

// components
import Button from "./Button";
import CollectInfo from "./CollectInfo";

// calculators
import * as Calculators from "../utils/calculators/index.js";
import buyCalcs from "../utils/buyCalcs";
import rentCalcs from "../utils/rentCalcs";

const StyledCalculator = styled.div``;

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.defaultState;
        this.handleChange = this.handleChange.bind(this);
    }

    calculate() {
        let temp = this.state;
        temp.calcs.graphData = {};
        let { VOP, RENT, PTR, LTT, MR, DP, AP, REA, SMA } = this.state;

        let xbuyCalcs = buyCalcs(VOP, MR, DP, LTT, AP, PTR, REA);
        let xrentCalcs = rentCalcs(
            RENT,
            xbuyCalcs.initialCosts.Total,
            xbuyCalcs.monthlyCosts.Total,
            SMA,
            REA,
            AP
        );
        temp.calcs.buy = xbuyCalcs;
        temp.calcs.rent = xrentCalcs;

        temp.calcs.percentRule = Calculators.calcPercentRule(VOP);

        if (temp.calcs.percentRule < temp.calcs.rent.monthlyCosts.Rent) {
            temp.calcs.rentOrBuy = "buy";
        } else {
            temp.calcs.rentOrBuy = "rent";
        }

        temp.calcs.donecalcs = true;
        // console.log("calcs", temp.calcs);
        this.setState({ calcs: temp.calcs });
        this.props.sendToApp(temp);
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
                    PTR={this.state.PTR}
                    LTT={this.state.LTT}
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
