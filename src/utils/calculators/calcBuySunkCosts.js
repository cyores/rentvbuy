/**
 * Calculate Buy Sunk Costs
 * Calculates the total sunk costs of buying over the amortization period.
 *
 * @param {number} tax   Monthly taxes.
 * @param {number} maint Monthly maintenance.
 * @param {number} ap    Amortization Period.
 * @param {number} pmt   Monthly Mortgage Payment.
 * @param {number} mp    Mortgage Principle.
 * @param {number} dtr   Difference to Rent
 * @param {number} sma   Stock Market Appreciation
 * @param {number} rea   Real Estate Appreciation
 *
 * @return {number}      The total sunk costs of buying after the amortization period in dollars.
 */
function calcBuySunkCosts(tax, maint, ap, pmt, mp, dtr, sma, rea) {
    if (
        tax === undefined ||
        maint === undefined ||
        ap === undefined ||
        pmt === undefined ||
        mp === undefined ||
        dtr === undefined ||
        sma === undefined ||
        rea === undefined
    )
        throw new Error("Missing argument(s)");
    if (
        tax < 0 ||
        maint < 0 ||
        ap < 0 ||
        pmt < 0 ||
        mp < 0 ||
        sma < 0 ||
        rea < 0
    )
        throw new Error("Values can't be less than 0");

    let interest = pmt * 12 * ap - mp;
    let taxAndMaint = (tax + maint) * 12 * ap;
    let opportunityCost = 0;
    if (dtr < 0) {
        opportunityCost = ((sma - rea) / 12) * Math.abs(dtr) * 12 * ap;
    }

    return parseFloat((interest + taxAndMaint + opportunityCost).toFixed(2));
}

export default calcBuySunkCosts;
