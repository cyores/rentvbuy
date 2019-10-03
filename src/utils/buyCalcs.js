/**
 * Buy Calcs.
 * Calculates and generates graph data for the Buy case.
 *
 * @param {number} vop Value of Property.
 * @param {number} mr  Mortgage Rate.
 * @param {number} dpp Downpayment Percentage
 * @param {number} ltt Land Transfer Tax
 * @param {number} ap  Amortization Period
 * @param {number} ptr Property Tax Rate.
 * @param {number} rea Real Estate Appreciation
 *
 * @return An object containing all the calculations and graph data.
 */

export default function buyCalcs(vop, mr, dpp, ltt, ap, ptr, rea) {
    // these values come in as percetages
    ptr = ptr / 100;
    mr = mr / 100;
    dpp = dpp / 100;
    let calcs = {
        initialCosts: {
            Downpayment: 0,
            Land_Transfer_Tax: 0,
            Total: 0
        },
        monthlyCosts: {
            Maintenance: 0,
            Taxes: 0,
            Mortgage_Payment: 0,
            Total: 0
        },
        endValue: {
            Property_Value: 0,
            Total_Sunk_Costs: 0,
            Net: 0
        },
        graphData: {
            propertyValue: [],
            sunkCosts: [],
            net: []
        }
    };

    // Initial Costs
    calcs.initialCosts.Downpayment = vop * dpp;
    calcs.initialCosts.Land_Transfer_Tax = ltt;
    calcs.initialCosts.Total =
        calcs.initialCosts.Downpayment + calcs.initialCosts.Land_Transfer_Tax;

    let mp = vop - calcs.initialCosts.Downpayment;

    // Monthly Cost
    calcs.monthlyCosts.Maintenance = (vop * 0.01) / 12;
    calcs.monthlyCosts.Taxes = (vop * ptr) / 12;
    calcs.monthlyCosts.Mortgage_Payment = calcPMT(mr, ap, mp);
    calcs.monthlyCosts.Total =
        calcs.monthlyCosts.Maintenance +
        calcs.monthlyCosts.Taxes +
        calcs.monthlyCosts.Mortgage_Payment;

    // gen graph data (and therefore endValue)
    let sunkCosts = ltt;
    let pmt = calcs.monthlyCosts.Mortgage_Payment;
    for (var i = 1; i <= ap; i++) {
        // at the end of year i
        sunkCosts += vop * ptr + vop * 0.01 + mp * mr;
        mp -= pmt * 12 - mp * mr;
        vop *= 1 + rea;

        calcs.graphData.propertyValue.push({ year: i, value: vop });
        calcs.graphData.sunkCosts.push({ year: i, value: sunkCosts });
        calcs.graphData.net.push({ year: i, value: vop - mp - sunkCosts });
    }

    // set end values
    calcs.endValue.Property_Value = vop;
    calcs.endValue.Total_Sunk_Costs = sunkCosts;
    calcs.endValue.Net =
        calcs.endValue.Property_Value - calcs.endValue.Total_Sunk_Costs;

    console.log("new new new", calcs);

    return calcs;
}

function calcPMT(amr, ap, mp) {
    // PMT = Principle * Rate / (1 - (1 + Rate)^-NumOfPayments)
    const R = amr / 12;
    const N = -12 * ap;
    return parseFloat(((mp * R) / (1 - Math.pow(1 + R, N))).toFixed(2));
}
