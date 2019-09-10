import calcEndStockValue from "../../../utils/calculators/calcEndStockValue";

it("calculate end stock value", () => {

    expect(calcEndStockValue(986.14, 0.06, 300000, 25)).toEqual(2033980.55);

    expect(() => {
        calcEndStockValue();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcEndStockValue(1);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcEndStockValue(1, 2);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcEndStockValue(1, 2, 3);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcEndStockValue(-1000000, 30, 3211, 4);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcEndStockValue(1000000, -30, 3211, 4);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcEndStockValue(1000000, 30, -3211, 4);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcEndStockValue(1000000, 30, 3211, -4);
    }).toThrow("Values can't be less than 0");
});
