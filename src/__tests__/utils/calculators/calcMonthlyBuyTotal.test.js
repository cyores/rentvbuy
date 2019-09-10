import calcMonthlyBuyTotal from "../../../utils/calculators/calcMonthlyBuyTotal";

it("calculate monthly buy total", () => {
    let mcb = {
        Taxes: 833.33,
        Maintenance: 833.33,
        Mortgage_Payment: 3793.69,
        Total: 0
    };
    expect(calcMonthlyBuyTotal(mcb)).toEqual(5460.35);

    mcb = {
        Taxes: 833.33,
        Maintenance: 833.33,
        Mortgage_Payment: 3793.69,
        Total: 12345
    };
    expect(calcMonthlyBuyTotal(mcb)).toEqual(5460.35);

    expect(() => {
        calcMonthlyBuyTotal();
    }).toThrow("Missing argument(s)");
});
