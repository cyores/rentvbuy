/**
 * Converts and annual rate to monthly rate (https://www.calculatorsoup.com/calculators/financial/equivalent-interest-rate-calculator.php)
 *
 * @param {Number} rate An annual rate of increase (percentage)
 *
 * @returns {Number} The equivalent monthly rate of increase (percentage).
 */
export default function equivalentMonthlyRate(rate) {
    return parseFloat(12 * (Math.pow(1 + rate / 1, 1 / 12) - 1).toFixed(9));
}
