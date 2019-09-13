import calcBuySunkCosts from "../../../utils/calculators/calcBuySunkCosts";

it("calculate buy sunk costs", () => {
    expect(
        calcBuySunkCosts(
            1,
            1200000,
            25,
            3983.38,
            840000,
            -1000,
            0.06,
            0.03,
            1000
        )
    ).toEqual(1240036.34);

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
});
