/**
 * Calculate Reny Net.
 * Calculates the net value of assets over time in rent case.
 *
 * @param {number} vop  Value of Property.
 * @param {number} ptr  Property Tax Rate.
 * @param {number} sma  Stock Market Appreciation.
 * @param {number} isi  Initial Stock Investment.
 * @param {number} rent Cost of Rent.
 * @param {number} ap   Amortization Period.
 * @param {number} rea  Real Estate Appreciation.
 * @param {number} pmt  Monthly Mortage Payment.
 *
 * @return {Object} Object with all the relevant calculations and graph data.
 */
function calcRentNet(vop, ptr, sma, isi, rent, ap, rea, pmt) {
    let graphData = [];
    let sav = isi; // Stock Account Value
    let currRent = rent;
    let currNet = 0;
    let totalSunkCosts = 0;
    let ivop = vop;
    let bmc = 0; // buy monthly costs

    for (var i = 0; i <= ap; i++) {
        // calcs
        totalSunkCosts += currRent * 12;
        currNet = sav - totalSunkCosts;

        bmc = pmt + ((ivop * (ptr / 100) + (ivop * 0.01)) / 12);
        // console.log(i, bmc.toFixed(2), currRent.toFixed(2));

        // add to graph
        graphData.push({ year: i, value: currNet });

        // next year's numbers
        if (!(i === ap)) {
            if (bmc - currRent > 0) {
                // console.log("add", 12 * (bmc - currRent));
                sav += 12 * (bmc - currRent);
            }
            sav *= 1 + sma;
            currRent *= 1 + rea;
            ivop *= 1 + rea;
        }
    }

    return {
        endStockValue: sav,
        endSunkCosts: totalSunkCosts,
        endNet: sav - totalSunkCosts,
        graphData: graphData
    };
}

export default calcRentNet;
