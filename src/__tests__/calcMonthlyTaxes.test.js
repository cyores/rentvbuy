import calcMonthlyTaxes from "../utils/calculators/calcMonthlyTaxes";

it("calculate monthly taxes", () => {
    expect(calcMonthlyTaxes(1200)).toEqual(100);
    expect(calcMonthlyTaxes(0, 1000000)).toEqual(833.33);
    expect(calcMonthlyTaxes(1200, 1000000)).toEqual(100);

    expect(() => {
        calcMonthlyTaxes();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcMonthlyTaxes(-1000000, 30);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcMonthlyTaxes(1000000, -30);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcMonthlyTaxes(-1000000, -30);
    }).toThrow("Values can't be less than 0");
});
