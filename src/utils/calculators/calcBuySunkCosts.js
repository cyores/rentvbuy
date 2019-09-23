/**
 * Calculate Buy Sunk Costs
 * Calculates the total sunk costs of buying over the amortization period.
 *
 * @param {number} ptr   Property Tax Rate.
 * @param {number} vop   Value of Property.
 * @param {number} ap    Amortization Period.
 * @param {number} pmt   Monthly Mortgage Payment.
 * @param {number} mp    Mortgage Principle.
 * @param {number} dtr   Difference to Rent
 * @param {number} sma   Stock Market Appreciation
 * @param {number} rea   Real Estate Appreciation
 * @param {number} ltt   Land Transfer Tax.
 *
 * @return {number}      The total sunk costs of buying after the amortization period in dollars.
 */
function calcBuySunkCosts(ptr, vop, ap, pmt, mp, dtr, sma, rea, ltt) {
    if (
        ptr === undefined ||
        vop === undefined ||
        ap === undefined ||
        pmt === undefined ||
        mp === undefined ||
        dtr === undefined ||
        sma === undefined ||
        rea === undefined
    )
        throw new Error("Missing argument(s)");
    if (ptr < 0 || vop < 0 || ap < 0 || pmt < 0 || mp < 0 || sma < 0 || rea < 0)
        throw new Error("Values can't be less than 0");

    let graphData = [];
    let annualInterest = (pmt * 12 * ap - mp) / ap;
    let atax = 0;
    let amaint = 0;
    let aoppcost = 0;
    let totalSunkCost = ltt + (sma - rea) * ltt;
    let ivop = vop;
    for (var i = 0; i < ap; i++) {
        atax = ivop * (ptr / 100);
        amaint = ivop * 0.01;
        if (dtr < 0) aoppcost = (sma - rea) * Math.abs(dtr);
        totalSunkCost += annualInterest + atax + amaint + aoppcost;
        graphData.push({
            year: i,
            value: totalSunkCost
        });

        ivop *= 1 + rea;
    }

    totalSunkCost = parseFloat(totalSunkCost.toFixed(2));

    return [totalSunkCost, graphData];

    // let interest = pmt * 12 * ap - mp;
    // let tax = 0;
    // let maint = 0;
    // let ivop = vop;
    // for (var i = 0; i < ap; i++) {
    //     tax += ivop * (ptr / 100);
    //     maint += ivop * 0.01;
    //     ivop *= 1 + rea;
    // }

    // let opportunityCost = 0;
    // if (dtr < 0) {
    //     opportunityCost = (sma - rea) * Math.abs(dtr) * 12 * ap;
    // }

    // return [parseFloat(
    //     (ltt + interest + tax + maint + opportunityCost).toFixed(2)
    // ), 0];
}

export default calcBuySunkCosts;
