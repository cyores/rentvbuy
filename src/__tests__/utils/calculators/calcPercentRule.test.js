import calcPercentRule from "../../../utils/calculators/calcPercentRule";

it("calculate 5 percent rule", () => {
    expect(calcPercentRule(1000000)).toEqual(4166.67);

    expect(() => {
        calcPercentRule();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcPercentRule(-100);
    }).toThrow("Values can't be less than 0");
});
