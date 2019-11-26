import { initialState } from "./initialCalculationsState";
import equivalentMonthlyRate from "./equations/equivalentMonthlyRate";
import monthlyMortgagePayment from "./equations/monthlyMortgagePayment";

/**
 * Does all the calculations and generate graph data.
 *
 * @param {Number} VOP Value of Property.
 * @param {Number} PROPTERY_TAX
 * @param {Number} LAND_TAX
 * @param {Number} MORTGAGE_RATE
 * @param {Number} DOWNPAYMENT_PERCENTAGE
 * @param {Number} RENT
 * @param {Number} AP
 *
 * @returns {Object} Object containing calculations and graph data.
 */
export default function calculator(
    VOP,
    PROPTERY_TAX,
    LAND_TAX,
    MORTGAGE_RATE,
    DOWNPAYMENT_PERCENTAGE,
    RENT,
    AP
) {
    let STOCK_APPRECIATION = 0.06;
    let REAL_ESTATE_APPRECIATION = 0.03;

    let calculations = initialState;

    let monthlyStockApp = equivalentMonthlyRate(STOCK_APPRECIATION);
    let monthlyRealEstateApp = equivalentMonthlyRate(REAL_ESTATE_APPRECIATION);

    // Calculate initial values
    calculations.buy.initialCosts.Downpayment = VOP * DOWNPAYMENT_PERCENTAGE;
    calculations.buy.Mortgage_Principle = VOP - calculations.buy.initialCosts.Downpayment;
    calculations.buy.initialCosts.Land_Transfer_Tax = LAND_TAX;
    calculations.buy.initialCosts.Total = Object.values(calculations.buy.initialCosts).reduce((acc, val) => acc + val);

    calculations.rent.initialCosts.Stock_Investment = calculations.buy.initialCosts.Total
    calculations.rent.initialCosts.Total = Object.values(calculations.rent.initialCosts).reduce((acc, val) => acc + val);

    // Calculate initial monthly values
    calculations.buy.monthlyCosts.Maintenance = (VOP * 0.01) / 12;
    calculations.buy.monthlyCosts.Taxes = (VOP * PROPTERY_TAX) / 12;
    calculations.buy.monthlyCosts.Mortgage_Payment = monthlyMortgagePayment(calculations.buy.Mortgage_Principle, MORTGAGE_RATE, AP);
    calculations.buy.monthlyCosts.Total = Object.values(calculations.buy.monthlyCosts).reduce((acc, val) => acc + val);

    calculations.rent.monthlyCosts.Rent = RENT;
    calculations.rent.monthlyCosts.Stock_Investment = Math.max(0, calculations.buy.monthlyCosts.Total - RENT);
    calculations.rent.monthlyCosts.Total = Object.values(calculations.rent.monthlyCosts).reduce((acc, val) => acc + val);

    // Generate graph data and therefore end values
    let buyGraphData = calculations.buy.graphData;
    let rentGraphData = calculations.rent.graphData;
    let mortgagePMT = calculations.buy.monthlyCosts.Mortgage_Payment;
    let mortgagePrinciple = calculations.buy.Mortgage_Principle;
    let buySunkCosts = LAND_TAX;
    let rentSunkCosts = 0;
    let monthlyStockInvestment = calculations.rent.monthlyCosts.Stock_Investment;
    let investmentsValue = calculations.rent.initialCosts.Stock_Investment;

    // buy initial values
    buyGraphData.monthlyCosts.Taxes.push({year: 0, value: (VOP * PROPTERY_TAX) / 12});
    buyGraphData.monthlyCosts.Maintenance.push({year: 0, value: (VOP * 0.01) / 12});
    buyGraphData.monthlyCosts.Mortgage_Payment.push({year: 0, value: mortgagePMT});
    buyGraphData.monthlyCosts.Total.push({year: 0, value: monthlyTaxes + monthlyMaint + mortgagePMT});

    buyGraphData.afterPeriod.Property_Value.push({year: 0, value: VOP});
    buyGraphData.afterPeriod.Total_Sunk_Costs.push({year: year, value: buySunkCosts});
    buyGraphData.afterPeriod.Net.push({year: 0, value: VOP - mortgagePrinciple - buySunkCosts});

    // rent initial values
    rentGraphData.monthlyCosts.Rent.push({year: 0, value: RENT});
    rentGraphData.monthlyCosts.Stock_Investment.push({year: 0, value: monthlyStockInvestment});
    rentGraphData.monthlyCosts.Total.push({year: 0, value: RENT + monthlyStockInvestment});

    rentGraphData.afterPeriod.Investments_Value.push({year: 0, value: investmentsValue});
    rentGraphData.afterPeriod.Total_Sunk_Costs.push({year: 0, value: rentSunkCosts});
    rentGraphData.afterPeriod.Net.push({year: 0, value: investmentsValue - rentSunkCosts});



    for(let year = 1; year <= AP; year++) {
        


        for (let month = 1; month <= 12; month++) {}
    }

    console.log(calculations);
    return calculations;
}
