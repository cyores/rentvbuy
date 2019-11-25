import monthlyMortgagePayment from "../../../utils/equations/monthlyMortgagePayment";

it("Equivalent Monthly Rate", () => {
    expect(monthlyMortgagePayment(700000, 0.03, 25)).toBeCloseTo(3319.48, 3);
});
