import React, { Component } from "react";
import styled from "styled-components";

// components
import Button from "./Button";
import CollectInfo from "./CollectInfo";

// calculators
import * as Calculators from "../utils/calculators/index.js";

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
        let { VOP, RENT, PTR, LTT, CF, MR, DP, AP, REA, SMA } = this.state;
        let buyInitials = {};
        let rentInitials = {};
        let buyMonthlys = {};
        let rentMonthlys = {};
        let buyAfters = {};
        let rentAfters = {};

        // the order matters

        // BUY INITIALS
        buyInitials.Downpayment = Calculators.calcDownpayment(VOP, DP);
        buyInitials.Land_Transfer_Tax = LTT;
        buyInitials.Total =
            buyInitials.Downpayment + buyInitials.Land_Transfer_Tax;

        // RENT INITIALS
        rentInitials.Stock_Investment = buyInitials.Total;
        rentInitials.Total = rentInitials.Stock_Investment;

        // MORTGAGE PRINCIPLE
        temp.calcs.buy.Mortgage_Principle = VOP - buyInitials.Downpayment;

        // RENT MONTHLY COSTS
        rentMonthlys.Rent = RENT;
        rentMonthlys.Total = RENT;

        // BUY MONTHLY COSTS
        buyMonthlys.Taxes = Calculators.calcMonthlyTaxes(PTR, VOP);
        buyMonthlys.Maintenance = Calculators.calcMonthlyMaint(CF, VOP);
        buyMonthlys.Mortgage_Payment = Calculators.calcMonthlyPMT(
            MR,
            AP,
            temp.calcs.buy.Mortgage_Principle
        );
        buyMonthlys.Total = Calculators.calcMonthlyBuyTotal(buyMonthlys);

        // DIFFERENCES TO RENT/BUY
        temp.calcs.rent.analysis.Difference_To_Buy = parseFloat(
            (buyMonthlys.Total - rentMonthlys.Total).toFixed(2)
        );

        temp.calcs.buy.analysis.Difference_To_Rent = parseFloat(
            (rentMonthlys.Total - buyMonthlys.Total).toFixed(2)
        );

        // BUY AFTERS
        let propertyValueCalcs = Calculators.calcEndPropertyValue(
            VOP,
            REA,
            AP
        );
        buyAfters.Property_Value = propertyValueCalcs[0];
        temp.calcs.graphData.propertyValue = propertyValueCalcs[1];
        
        let buySunkCostCalcs = Calculators.calcBuySunkCosts(
            PTR,
            VOP,
            AP,
            buyMonthlys.Mortgage_Payment,
            temp.calcs.buy.Mortgage_Principle,
            temp.calcs.buy.analysis.Difference_To_Rent,
            SMA,
            REA,
            LTT
        );
        buyAfters.Total_Sunk_Costs = buySunkCostCalcs[0];
        temp.calcs.graphData.buySunkCosts = buySunkCostCalcs[1];

        buyAfters.Net = parseFloat(
            (buyAfters.Property_Value - buyAfters.Total_Sunk_Costs).toFixed(2)
        );

        // RENT AFTERS
        rentAfters.Investments_Value = Calculators.calcEndStockValue(
            temp.calcs.rent.analysis.Difference_To_Buy,
            SMA,
            rentInitials.Total,
            AP
        );
        rentAfters.Total_Sunk_Costs = Calculators.calcRentSunkCosts(
            RENT,
            AP,
            temp.calcs.rent.analysis.Difference_To_Buy,
            REA
        );
        rentAfters.Net = parseFloat(
            (
                rentAfters.Investments_Value - rentAfters.Total_Sunk_Costs
            ).toFixed(2)
        );

        // 5% RULE
        temp.calcs.percentRule = Calculators.calcPercentRule(VOP);

        // ASSIGNING OBJECTS
        temp.calcs.buy.initialCosts = buyInitials;
        temp.calcs.buy.monthlyCosts = buyMonthlys;
        temp.calcs.buy.afterPeriod = buyAfters;

        temp.calcs.rent.initialCosts = rentInitials;
        temp.calcs.rent.monthlyCosts = rentMonthlys;
        temp.calcs.rent.afterPeriod = rentAfters;

        if (temp.calcs.percentRule < temp.calcs.rent.monthlyCosts.Rent) {
            temp.calcs.rentOrBuy = "buy";
        } else {
            temp.calcs.rentOrBuy = "rent";
        }

        temp.calcs.donecalcs = true;
        console.log("calcs", temp.calcs);
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
