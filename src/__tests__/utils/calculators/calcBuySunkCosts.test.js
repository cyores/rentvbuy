import calcBuySunkCosts from "../../../utils/calculators/calcBuySunkCosts";

it("calculate buy sunk costs", () => {

    expect(calcBuySunkCosts(500, 500, 25)).toEqual(300000);

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
        calcBuySunkCosts(-1000000, 30, 3);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcBuySunkCosts(1000000, -30, 3);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcBuySunkCosts(1000000, 30, -3);
    }).toThrow("Values can't be less than 0");


});
