/**
 * Calculate Monthly Maintenance.
 * Calculates the monthly dollar amount of maintenance. 
 * If condo fee is 0, it is assumed the maintenance is equal to 1% of the value of property per year.
 * If conde fee is grecfer than 0, the maintenance is 0.5% plus the condo fee.
 * 
 * @param {number} cf  Annual Taxes.
 * @param {number} vop Value of Property.
 *
 * @return {number}    The monthly dollar amount of property taxes due.
 */
function calcMonthlyMaint(cf, vop) {
    if (cf === undefined || vop === undefined) throw new Error("Missing argument(s)");
    if (vop < 0|| cf < 0) throw new Error("Values can't be less than 0");
    if (cf > 0) {
        return parseFloat((cf + (vop * 0.005) / 12).toFixed(2));
    } else {
        return parseFloat(((vop * 0.01) / 12).toFixed(2)); // assume maintenance of 1% if no condo fee
    }
}

export default calcMonthlyMaint;
