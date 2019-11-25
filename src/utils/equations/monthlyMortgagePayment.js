/**
 * Calculates the monthly mortgage payment.
 *
 * @param {Number} MORTGAGE_PRINCIPLE
 * @param {Number} MORTGAGE_RATE
 * @param {Number} AP Amortization Period.
 *
 * @returns {Number} Monthly mortgage payment due (in dollars).
 */
export default function monthlyMortgagePayment(
    MORTGAGE_PRINCIPLE,
    MORTGAGE_RATE,
    AP
) {
    // PMT = Principle * Rate / (1 - (1 + Rate)^-NumOfPayments)
    const R = MORTGAGE_RATE / 12;
    const N = -12 * AP;
    return parseFloat(
        ((MORTGAGE_PRINCIPLE * R) / (1 - Math.pow(1 + R, N))).toFixed(2)
    );
}
