/**
 * Calculate Downpayment.
 * Calculates the dollar amount of the downpayment by multiplying the value of the property by the downpayment percentage.
 *
 * @param {number} vop Value of Property.
 * @param {number} dpp Downpayment Percentage..
 *
 * @return {number}    The downpayment amount in dollars.
 */
function calcDownpayment(vop, dpp) {
    if (vop === undefined || dpp === undefined) throw new Error("Missing argument(s)");
    if (vop < 0 || dpp < 0) throw new Error("Values can't be less than 0");
    return parseFloat((vop * (dpp / 100)).toFixed(2));
}

export default calcDownpayment;