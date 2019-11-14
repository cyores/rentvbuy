import React, { Component } from "react";

// components
import Button from "./utils/Button";
import CollectInfo from "./CollectInfo";
import Flex from "./utils/Flex";

// calculators
import buyCalcs from "../utils/buyCalcs";
import rentCalcs from "../utils/rentCalcs";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.defaultState;
        this.handleChange = this.handleChange.bind(this);
    }

    calculate() {
        let temp = this.state;
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

        temp.calcs.percentRule = parseFloat(((VOP * 0.05) / 12).toFixed(2));

        if (temp.calcs.percentRule < temp.calcs.rent.monthlyCosts.Rent) {
            temp.calcs.rentOrBuy = "buy";
        } else {
            temp.calcs.rentOrBuy = "rent";
        }

        temp.calcs.donecalcs = true;
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
            <Flex dir="rowleft">
                <div>
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
                </div>
                <div>
                    <Button
                        theme="primary"
                        text="Calculate"
                        onClick={() => this.calculate()}
                    >
                        Calculate
                    </Button>
                </div>
            </Flex>
        );
    }
}

export default Calculator;
