import equivalentMonthlyRate from "./equations/equivalentMonthlyRate";

/**
 * Does all the calculations and generate graph data.
 *
 * @param {Number} VOP Value of Property.
 * @param {Number} PROPTERY_TAX
 * @param {Number} LAND_TAX
 * @param {Number} MORTGAGE_RATE
 * @param {Number} DOWNPAYMENT_PERCENTAGE
 * @param {Number} AP
 *
 * @returns {Object} Object containing calculations and graph data.
 */
export default function calculator(
    VOP,
    PROPTERY_TAX,
    LAND_TAX,
    MORTGAGE_RATE,
    DOWNPAYMENT_PERCENTAGE,
    AP
) {
    let STOCK_APPRECIATION = 0.06;
    let REAL_ESTATE_APPRECIATION = 0.03;

    let monthlyStockApp = equivalentMonthlyRate(STOCK_APPRECIATION);
    let monthlyRealEstateApp = equivalentMonthlyRate(REAL_ESTATE_APPRECIATION);

    // Calculate initial values

    // Calculate initial monthly values

    // Generate graph data and therefore end values
    for (let year = 1; year <= AP; year++) {
        for (let month = 1; month <= 12; month++) {}
    }

    return {};
}
