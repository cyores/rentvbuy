/**
 * Calculate End Property Value
 * Calculates the expected value of the property at the end of the amortization period.
 *
 * @param {number} vop (initial) Value of Property.
 * @param {number} rea Real Estate Appreciation.
 * @param {number} ap  Amortization Period.
 *
 * @return {number}    The expected value of the property after the amortization period in dollars.
 */
function calcEndPropertyValue(vop, rea, ap) {
    if (vop === undefined || rea === undefined || ap === undefined)
        throw new Error("Missing argument(s)");
    if (vop < 0 || rea < 0 || ap < 0)
        throw new Error("Values can't be less than 0");

    let graphData = [];
    let ivop = vop;
    for (var i = 0; i < ap; i++) {
        graphData.push({ year: i, value: ivop });
        ivop *= 1 + rea;
    }

    return [parseFloat((vop * (Math.pow(1 + rea, ap) - 1) + vop).toFixed(2)), graphData];
}

export default calcEndPropertyValue;
