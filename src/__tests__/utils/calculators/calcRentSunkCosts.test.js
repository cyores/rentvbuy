import calcRentSunkCosts from "../../../utils/calculators/calcRentSunkCosts";

it("calculate rent sunk costs", () => {

    expect(calcRentSunkCosts(1000, 25)).toEqual(300000);

    expect(() => {
        calcRentSunkCosts();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcRentSunkCosts(1);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcRentSunkCosts(-1000000, 30);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcRentSunkCosts(1000000, -30);
    }).toThrow("Values can't be less than 0");


});
