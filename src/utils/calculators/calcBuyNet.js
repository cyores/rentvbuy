/**
 * Calculate Buy Net.
 * Calculates total net worth of assets over time from the buy case.
 *
 * @param {number} vop Value of Property.
 * @param {number} rea Real Estate Appreciation.
 * @param {number} mp  Mortgage Principle.
 * @param {number} mr  Mortage Rate.
 * @param {number} pmt Monthly Mortage Payment.
 * @param {number} ptr Property Tax Rate.
 * @param {number} sma Stock Market Appreciation.
 * @param {number} ap  Amortization Period.
 * @param {number} ltt Land Transfer Tax.
 * @param {number} rent Rent
 *
 * @return {Object} Object with all the relevant calculations and graph data.
 */

function calcBuyNet(vop, rea, mp, mr, pmt, ptr, sma, ap, ltt, rent) {
    let graphData = [];
    let ivop = vop;
    let imp = mp;
    let currInterest = 0;
    let currNet = vop - mp - ltt;
    let currTax = 0;
    let currMaint = 0;
    let irent = rent;
    let currSunkCosts = 0;
    let totalSunkCosts = ltt;
    for (var i = 0; i <= ap; i++) {
        // add to graph
        graphData.push({ year: i, value: currNet });

        // calcs
        currTax = ivop * (ptr / 100);
        currMaint = ivop * 0.01;
        currInterest = imp * (mr / 100);

        currSunkCosts = currTax + currMaint + currInterest;
        totalSunkCosts += currSunkCosts;

        currNet = ivop - imp - totalSunkCosts;

        // next year's data
        if (!(i === ap)) {
            ivop *= 1 + rea;
            imp -= mp / ap;
            irent *= 1 + rea;
            // imp -= (pmt * 12 - currInterest);
        }
    }

    return {
        endVOP: ivop,
        endSunkCosts: totalSunkCosts,
        endNet: ivop - totalSunkCosts,
        graphData: graphData
    };
}

export default calcBuyNet;
