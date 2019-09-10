import calcMonthlyPMT from "../utils/calculators/calcMonthlyPMT";

it("calculate PMT", () => {
    expect(calcMonthlyPMT(3, 25, 700000)).toEqual(3319.48);
    expect(calcMonthlyPMT(2.75, 15, 510300)).toEqual(3463.01);

    expect(() => {
        calcMonthlyPMT();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcMonthlyPMT(34);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcMonthlyPMT(3, 23);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcMonthlyPMT(-1000000, 30, 3211);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcMonthlyPMT(1000000, -30, 213232);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcMonthlyPMT(1000000, 30, -908);
    }).toThrow("Values can't be less than 0");
});
