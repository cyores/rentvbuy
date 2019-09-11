import calcMonthlyTaxes from "../../../utils/calculators/calcMonthlyTaxes";

it("calculate monthly taxes", () => {
    expect(calcMonthlyTaxes(1, 1200000)).toEqual(1000);
    expect(calcMonthlyTaxes(0, 1000000)).toEqual(0);

    expect(() => {
        calcMonthlyTaxes();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcMonthlyTaxes(1);
    }).toThrow("Missing argument(s)");


    expect(() => {
        calcMonthlyTaxes(-1, 2);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcMonthlyTaxes(1, -2);
    }).toThrow("Values can't be less than 0");

});
