import calcBuySunkCosts from "../../../utils/calculators/calcBuySunkCosts";

it("calculate buy sunk costs", () => {
    expect(
        calcBuySunkCosts(500, 500, 25, 3319.48, 700000, -986.14, 0.06, 0.03)
    ).toEqual(596583.6);

    expect(() => {
        calcBuySunkCosts();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcBuySunkCosts(1);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcBuySunkCosts(1, 2);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcBuySunkCosts(1, 2, 3);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcBuySunkCosts(1, 2, 3, 4);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcBuySunkCosts(1, 2, 3, 4, 5);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcBuySunkCosts(1, 2, 3, 4, 5, 6);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcBuySunkCosts(1, 2, 3, 4, 5, 6, 7);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcBuySunkCosts(-1, 2, 3, 4, 5, 6, 7, 8);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcBuySunkCosts(1, -2, 3, 4, 5, 6, 7, 8);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcBuySunkCosts(1, 2, -3, 4, 5, 6, 7, 8);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcBuySunkCosts(1, 2, 3, -4, 5, 6, 7, 8);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcBuySunkCosts(1, 2, 3, 4, -5, 6, 7, 8);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcBuySunkCosts(1, 2, 3, 4, 5, 6, -7, 8);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcBuySunkCosts(1, 2, 3, 4, 5, 6, 7, -8);
    }).toThrow("Values can't be less than 0");
});
