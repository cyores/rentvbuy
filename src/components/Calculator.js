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
        s.calcs.buy.initialCosts.Downpayment = this.calcDownpayment(s);

        s.calcs.buy.Mortgage_Principle =
            s.VOP - s.calcs.buy.initialCosts.Downpayment;

        s.calcs.rent.initialCosts.Stock_Investment = this.calcDownpayment(s);

        s.calcs.rent.monthlyCosts.Rent = this.calcMonthlyCostsRent(s);

        s.calcs.buy.monthlyCosts.Taxes = this.calcMonthlyCostsTaxes(s);

        s.calcs.buy.monthlyCosts.Maintenance = this.calcMonthlyCostsMaint(s);

        s.calcs.buy.Mortgage_Principle = this.calcMortgagePrinciple(s);

        s.calcs.buy.monthlyCosts.Mortgage_Payment = this.calcMonthlyCostsPMT(s);

        s.calcs.buy.monthlyCosts.Total = this.calcMonthlyBuyTotal(s);

        s.calcs.rent.monthlyCosts.Total = this.calcMonthlyRentTotal(s);

        s.calcs.rent.monthlyCosts.Difference_To_Buy = parseFloat(
            (
                s.calcs.buy.monthlyCosts.Total - s.calcs.rent.monthlyCosts.Total
            ).toFixed(2)
        );

        s.calcs.buy.monthlyCosts.Difference_To_Rent = parseFloat(
            (
                s.calcs.rent.monthlyCosts.Total - s.calcs.buy.monthlyCosts.Total
            ).toFixed(2)
        );

        s.calcs.buy.afterPeriod.Property_Value = this.calcEndPropertyValue(s);

        s.calcs.rent.afterPeriod.Investments_Value = this.calcEndStocksValue(s);

        s.calcs.buy.afterPeriod.Total_Sunk_Costs = this.calcBuySunkCosts(s);

        s.calcs.rent.afterPeriod.Total_Sunk_Costs = this.calcRentSunkCosts(s);

        s.calcs.rent.afterPeriod.Net =
            parseFloat((s.calcs.rent.afterPeriod.Investments_Value -
            s.calcs.rent.afterPeriod.Total_Sunk_Costs).toFixed(2));

        s.calcs.buy.afterPeriod.Net =
            parseFloat((s.calcs.buy.afterPeriod.Property_Value -
            s.calcs.buy.afterPeriod.Total_Sunk_Costs).toFixed(2));

        s.calcs.percentRule = this.calcPercentRule(s);

        if (s.calcs.percentRule < s.calcs.rent.monthlyCosts.Rent) {
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
        return s.VOP - s.calcs.buy.initialCosts.Downpayment;
    }

    calcMonthlyCostsPMT(s) {
        // PMT=(Pv∗Rate∗(1+Rate)Nper)/[(1+Rate)Nper−1]
        const R = s.MR / 100 / 12;
        const N = -12 * s.AP;
        return parseFloat(
            (
                (s.calcs.buy.Mortgage_Principle * R) /
                (1 - Math.pow(1 + R, N))
            ).toFixed(2)
        );
    }

    calcPercentRule(s) {
        return parseFloat(
            (
                (s.VOP * (s.SMA - s.REA)) / 12 +
                s.calcs.buy.monthlyCosts.Maintenance +
                s.calcs.buy.monthlyCosts.Taxes
            ).toFixed(2)
        );
    }

    calcMonthlyRentTotal(s) {
        return s.calcs.rent.monthlyCosts.Rent;
    }

    calcMonthlyBuyTotal(s) {
        s.calcs.buy.monthlyCosts.Difference_To_Rent = 0;
        s.calcs.buy.monthlyCosts.Total = 0;
        return parseFloat(
            Object.values(s.calcs.buy.monthlyCosts)
                .reduce((accumlator, curr) => {
                    return accumlator + curr;
                })
                .toFixed(2)
        );
    }

    calcEndPropertyValue(s) {
        return parseFloat((s.VOP * (Math.pow(1 + s.REA, s.AP) - 1)).toFixed(2));
    }

    calcEndStocksValue(s) {
        if (s.calcs.rent.monthlyCosts.Difference_To_Buy > 0) {
            let T = s.AP * 12;
            let monthlyGain = s.SMA / 12;
            let monthlyDeposit = s.calcs.rent.monthlyCosts.Difference_To_Buy;
            let investmentValue = s.calcs.rent.initialCosts.Stock_Investment;
            while (T >= 0) {
                investmentValue *= 1 + monthlyGain;
                investmentValue += monthlyDeposit;
                T--;
            }
            return parseFloat(investmentValue.toFixed(2));
        } else {
            return parseFloat(
                (
                    s.calcs.rent.initialCosts.Stock_Investment *
                    (Math.pow(1 + s.SMA, s.AP) - 1)
                ).toFixed(2)
            );
        }
    }

    calcRentSunkCosts(s) {
        return parseFloat(
            (s.calcs.rent.monthlyCosts.Rent * 12 * s.AP).toFixed(20)
        );
    }

    calcBuySunkCosts(s) {
        return parseFloat(
            (
                (s.calcs.buy.monthlyCosts.Taxes +
                    s.calcs.buy.monthlyCosts.Maintenance) *
                12 *
                s.AP
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
