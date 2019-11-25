import calculator from "../../utils/calculator";

xit("Equivalent Monthly Rate", () => {
    let calcs = calculator(1000000, 0.01, 10000, 0.03, 0.3, 1000, 25);

    // buy initials
    expect(calcs.buy.Mortgage_Principle).toBeCloseTo(700000, 2);
    expect(calcs.buy.initialCosts.Downpayment).toBeCloseTo(300000, 2);
    expect(calcs.buy.initialCosts.Land_Transfer_Tax).toBeCloseTo(10000, 2);
    expect(calcs.buy.initialCosts.Total).toBeCloseTo(310000, 2);

    // rent initials
    expect(calcs.rent.initialCosts.Stock_Investment).toBeCloseTo(310000, 2);
    expect(calcs.rent.initialCosts.Total).toBeCloseTo(310000, 2);

    // buy monthly
    expect(calcs.buy.monthlyCosts.Maintenance).toBeCloseTo(833.33, 2);
    expect(calcs.buy.monthlyCosts.Taxes).toBeCloseTo(833.33, 2);
    expect(calcs.buy.monthlyCosts.Mortgage_Payment).toBeCloseTo(3319.48, 2);
    expect(calcs.buy.monthlyCosts.Total).toBeCloseTo(4986.14, 2);

    // rent monthly
    expect(calcs.rent.monthlyCosts.Rent).toBeCloseTo(1000, 2);
    expect(calcs.buy.monthlyCosts.Stock_Investment).toBeCloseTo(3986.14, 2);
    expect(calcs.buy.monthlyCosts.Total).toBeCloseTo(4986.14, 2);
});
