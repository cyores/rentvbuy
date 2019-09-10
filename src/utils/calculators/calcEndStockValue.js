/**
 * Calculate End Stock Investments Value
 * Calculates the expected value of the stock portfolio at the end of the amortization period.
 *
 * @param {number} dtb Difference To Buy (monthly costs difference to buy case)
 * @param {number} sta Stock Market Appreciation.
 * @param {number} isi Initial Stock Investment.
 * @param {number} ap  Amortization Period.
 *
 * @return {number}    The expected value of the stock portfolio after the amortization period in dollars.
 */
function calcEndStockValue(dtb, sma, isi, ap) {
    if (
        dtb === undefined ||
        sma === undefined ||
        isi === undefined ||
        ap === undefined
    )
        throw new Error("Missing argument(s)");
    if (dtb < 0 || sma < 0 || isi < 0 || ap < 0)
        throw new Error("Values can't be less than 0");

    if (dtb > 0) {
        let T = ap * 12;
        let monthlyGain = sma / 12;
        let monthlyDeposit = dtb;
        let investmentValue = isi;
        while (T >= 0) {
            investmentValue *= 1 + monthlyGain;
            investmentValue += monthlyDeposit;
            T--;
        }
        return parseFloat(investmentValue.toFixed(2));
    } else {
        return parseFloat((isi * (Math.pow(1 + sma, ap) - 1)).toFixed(2));
    }
}

export default calcEndStockValue;
