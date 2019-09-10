/**
 * Calculate Monthly Total for BUY
 * Calculates the monthly dollar amount to be paid if buying the property
 *
 * @param {Object} mcb Monthly Costs Buy.
 *
 * @return {number}   The sum of monthly costs in dollars.
 */
function calcMonthlyBuyTotal(mcb) {
    if (mcb === undefined) throw new Error("Missing argument(s)");

    mcb.Total = 0;
    return parseFloat(
        Object.values(mcb)
            .reduce((accumlator, curr) => {
                return accumlator + curr;
            })
            .toFixed(2)
    );
}

export default calcMonthlyBuyTotal;
