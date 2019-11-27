import React, { Component } from "react";

// calculators
import { calculator } from "../utils/";

// components
import Button from "./utils/Button";
import CollectInfo from "./CollectInfo";
import Flex from "./utils/Flex";

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.defaultState;
        this.handleChange = this.handleChange.bind(this);
    }

    calculate() {
        let temp = {};
        let { VOP, RENT, PTR, LTT, MR, DP, AP } = this.state;

        temp.calcs = calculator(
            VOP,
            PTR / 100,
            LTT,
            MR / 100,
            DP / 100,
            RENT,
            AP
        );

        temp.showOnGraph = [
            { label: "Buy", data: temp.calcs.buy.graphData.afterPeriod.Net },
            { label: "Rent", data: temp.calcs.rent.graphData.afterPeriod.Net }
        ];
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
                        theme="outline"
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
