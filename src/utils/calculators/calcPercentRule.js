/**
 * Calculate 5 Percent Rule.
 * Calculates the dollar amount of the 5% rule.
 *
 * @param {number} vop Value of Property.
 *
 * @return {number}   The monthly dollar amount of the 5% rule.
 */
function calcPercentRule(vop) {
    if (vop === undefined) throw new Error("Missing argument(s)");
    if (vop < 0) throw new Error("Values can't be less than 0");

    return parseFloat(((vop * 0.05) / 12).toFixed(2));

    // my percent rule
    // return parseFloat(
    //     (
    //         (s.VOP * (s.SMA - s.REA)) / 12 +
    //         s.calcs.buy.monthlyCosts.Maintenance +
    //         s.calcs.buy.monthlyCosts.Taxes
    //     ).toFixed(2)
    // );
}

export default calcPercentRule;
