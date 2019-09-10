/**
 * Calculate Monthly Mortgage Payment.
 * Calculates the monthly dollar amount of the mortgage payment.
 * // PMT = Principle * Rate / (1 - (1 + Rate)^-NumOfPayments)
 *
 * @param {number} amr Annualized Mortgage Rate.
 * @param {number} ap  Amortization Period.
 * @param {number} mp  Mortgage Principle.
 *
 * @return {number}   The monthly dollar amount of property taxes due.
 */
function calcMonthlyMaint(amr, ap, mp) {
    if (amr === undefined || ap === undefined || mp === undefined)
        throw new Error("Missing argument(s)");
    if (amr < 0 || ap < 0 || mp < 0)
        throw new Error("Values can't be less than 0");

    const R = amr / 100 / 12;
    const N = -12 * ap;
    return parseFloat(((mp * R) / (1 - Math.pow(1 + R, N))).toFixed(2));
}

export default calcMonthlyMaint;
