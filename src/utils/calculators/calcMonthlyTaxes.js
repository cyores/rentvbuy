/**
 * Calculate Monthly Taxes.
 * Calculates the monthly dollar amount of property taxes.
 *
 * @param {number} ptr Property Tax Rate.
 * @param {number} vop Value of Property.
 *
 * @return {number}    The monthly dollar amount of property taxes due.
 */
function calcMonthlyTaxes(ptr, vop) {
    if (ptr === undefined || vop === undefined)
        throw new Error("Missing argument(s)");
    if (ptr < 0 || vop < 0) throw new Error("Values can't be less than 0");

    return parseFloat(((vop * (ptr / 100)) / 12).toFixed(2));

}

export default calcMonthlyTaxes;
