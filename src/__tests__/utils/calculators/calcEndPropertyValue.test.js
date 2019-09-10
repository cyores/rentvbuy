import calcEndPropertyValue from "../../../utils/calculators/calcEndPropertyValue";

it("calculate end property value", () => {

    expect(calcEndPropertyValue(1000000, 0.03, 25)).toEqual(2093777.93);

    expect(() => {
        calcEndPropertyValue();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcEndPropertyValue(1);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcEndPropertyValue(1, 2);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcEndPropertyValue(-1000000, 30, 3211);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcEndPropertyValue(1000000, -30, 3211);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcEndPropertyValue(1000000, 30, -3211);
    }).toThrow("Values can't be less than 0");
});
