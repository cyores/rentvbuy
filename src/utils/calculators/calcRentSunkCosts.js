/**
 * Calculate Rent Sunk Costs
 * Calculates the total sunk costs of renting over the amortization period.
 *
 * @param {number} rent Monthly rent.
 * @param {number} ap   Amortization Period.
 *
 * @return {number}     The total sunk costs of renting after the amortization period in dollars.
 */
function calcRentSunkCosts(rent, ap) {
    if (rent === undefined || ap === undefined)
        throw new Error("Missing argument(s)");
    if (rent < 0 || ap < 0) throw new Error("Values can't be less than 0");

    return parseFloat((rent * 12 * ap).toFixed(2));
}

export default calcRentSunkCosts;
