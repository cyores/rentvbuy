/**
 * Calculate Rent Sunk Costs
 * Calculates the total sunk costs of renting over the amortization period.
 *
 * @param {number} rent Monthly rent.
 * @param {number} ap   Amortization Period.
 * @param {number} dtb  Differece To Buy.
 * @param {number} rea  Real Estate Appreciation.
 *
 * @return {number}     The total sunk costs of renting after the amortization period in dollars.
 */
function calcRentSunkCosts(rent, ap, dtb, rea) {
    if (
        rent === undefined ||
        ap === undefined ||
        dtb === undefined ||
        rea === undefined
    )
        throw new Error("Missing argument(s)");
    if (rent < 0 || ap < 0 || rea < 0)
        throw new Error("Values can't be less than 0");

    let rentCost = 0;
    let irent = rent;
    for (var i = 1; i <= ap * 12; i++) {
        rentCost += irent;
        if (i % 12 === 0) irent *= 1 + rea;
    }
    let opportunityCost = 0;
    if (dtb < 0) {
        opportunityCost = (rea / 12) * Math.abs(dtb) * 12 * ap;
    }

    return parseFloat((rentCost + opportunityCost).toFixed(2));
}

export default calcRentSunkCosts;
