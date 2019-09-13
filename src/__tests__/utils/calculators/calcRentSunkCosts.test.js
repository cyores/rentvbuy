import calcRentSunkCosts from "../../../utils/calculators/calcRentSunkCosts";

it("calculate rent sunk costs", () => {

    expect(calcRentSunkCosts(1000, 25, -100, 0.03)).toEqual(437586.17);

    expect(() => {
        calcRentSunkCosts();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcRentSunkCosts(1);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcRentSunkCosts(1, 2);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcRentSunkCosts(1, 2, 3);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcRentSunkCosts(-1, 2, 3, 4);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcRentSunkCosts(1, -2, 3, 4);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcRentSunkCosts(1, 2, 100, -4);
    }).toThrow("Values can't be less than 0");


});
