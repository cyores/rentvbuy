/**
 * Calculate Monthly Taxes.
 * Calculates the monthly dollar amount of property taxes. 
 * If annual tax is 0, it is assumed the taxes are equal to 1% of the value of property per year.
 * 
 * @param {number} at    Annual Taxes.
 * @param {number} [vop] Value of Property (optional).
 *
 * @return {number}      The monthly dollar amount of property taxes due.
 */
function calcMonthlyTaxes(at, vop) {
    if (at === undefined) throw new Error("Missing argument(s)");
    if (vop < 0|| at < 0) throw new Error("Values can't be less than 0");
    if (at > 0) {
        return parseFloat((at / 12).toFixed(2));
    } else {
        return parseFloat(((vop * 0.01) / 12).toFixed(2)); // assume taxes at 1% of VOP
    }
}

export default calcMonthlyTaxes;
