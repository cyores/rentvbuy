/**
 * Calculate Buy Sunk Costs
 * Calculates the total sunk costs of buying over the amortization period.
 *
 * @param {number} tax   Monthly taxes.
 * @param {number} maint Monthly maintenance.
 * @param {number} ap    Amortization Period.
 *
 * @return {number}      The total sunk costs of buying after the amortization period in dollars.
 */
function calcBuySunkCosts(tax, maint, ap) {
    if (tax === undefined || maint === undefined || ap === undefined)
        throw new Error("Missing argument(s)");
    if (tax < 0 || maint < 0 || ap < 0)
        throw new Error("Values can't be less than 0");

    return parseFloat(((tax + maint) * 12 * ap).toFixed(2));
}

export default calcBuySunkCosts;
