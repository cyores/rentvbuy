import calcMonthlyMaint from "../../../utils/calculators/calcMonthlyMaint";

it("calculate monthly maintenance", () => {
    expect(calcMonthlyMaint(1200, 0)).toEqual(1200);
    expect(calcMonthlyMaint(0, 1000000)).toEqual(833.33);
    expect(calcMonthlyMaint(1200, 1000000)).toEqual(1616.67);

    expect(() => {
        calcMonthlyMaint();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcMonthlyMaint(34);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcMonthlyMaint(-1000000, 30);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcMonthlyMaint(1000000, -30);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcMonthlyMaint(-1000000, -30);
    }).toThrow("Values can't be less than 0");
});
