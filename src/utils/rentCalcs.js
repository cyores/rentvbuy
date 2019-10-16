/**
 * Rent Calculations.
 * Calculates and generates graph data for the Buy case.
 *
 * @param {number} rent Rent.
 * @param {number} iiv  Initial Investment.
 * @param {number} bmp  Buy Monthly Payment.
 * @param {number} sma  Stock Market Appreciation.
 * @param {number} rea  Real Estate Appreciation.
 * @param {number} ap   Amortization Period.
 */

export default function rentCalcs(rent, iiv, bmp, sma, rea, ap) {
    let calcs = {
        initialCosts: {
            Stock_Investment: 0,
            Total: 0
        },
        monthlyCosts: {
            Rent: 0,
            Stock_Investment: 0,
            Total: 0
        },
        endValue: {
            Investments_Value: 0,
            Total_Sunk_Costs: 0,
            Net: 0
        },
        graphData: {
            investments: [],
            sunkCosts: [],
            net: []
        }
    };

    // Initial Costs
    calcs.initialCosts.Stock_Investment = iiv;
    calcs.initialCosts.Total = iiv;

    // Monthly Costs
    calcs.monthlyCosts.Rent = rent;
    if (bmp - rent > 0) {
        calcs.monthlyCosts.Stock_Investment = bmp - rent;
    } else {
        calcs.monthlyCosts.Stock_Investment = 0;
    }
    calcs.monthlyCosts.Total =
        calcs.monthlyCosts.Rent + calcs.monthlyCosts.Stock_Investment;

    // gen graph data
    let assets = iiv;
    let sunkCosts = 0;
    for (var i = 1; i <= ap; i++) {
        // at the end of year i
        sunkCosts += rent * 12;
        assets *= 1 + sma;
        if (bmp - rent > 0) {
            assets += bmp - rent;
        }

        calcs.graphData.investments.push({ year: i, value: assets });
        calcs.graphData.sunkCosts.push({ year: i, value: sunkCosts });
        calcs.graphData.net.push({ year: i, value: assets - sunkCosts });

        rent *= 1 + rea;
        // approximation of bmp increase (2.5%) found experimentally
        bmp *= 1.025;
    }

    // set end values
    calcs.endValue.Investments_Value = assets;
    calcs.endValue.Total_Sunk_Costs = sunkCosts;
    calcs.endValue.Net =
        calcs.endValue.Investments_Value - calcs.endValue.Total_Sunk_Costs;

    // round everything to 2 decimal places
    // initial
    calcs.initialCosts.Stock_Investment = parseFloat(
        calcs.initialCosts.Stock_Investment.toFixed(2)
    );
    calcs.initialCosts.Total = calcs.initialCosts.Stock_Investment;

    // monthly
    calcs.monthlyCosts.Stock_Investment = parseFloat(
        calcs.monthlyCosts.Stock_Investment.toFixed(2)
    );
    calcs.monthlyCosts.Total = parseFloat(calcs.monthlyCosts.Total.toFixed(2));

    // end
    calcs.endValue.Investments_Value = parseFloat(
        calcs.endValue.Investments_Value.toFixed(2)
    );
    calcs.endValue.Total_Sunk_Costs = parseFloat(
        calcs.endValue.Total_Sunk_Costs.toFixed(2)
    );
    calcs.endValue.Net = parseFloat(calcs.endValue.Net.toFixed(2));

    return calcs;
}
