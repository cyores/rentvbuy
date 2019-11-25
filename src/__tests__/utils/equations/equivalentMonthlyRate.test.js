import equivalentMonthlyRate from "../../../utils/equations/equivalentMonthlyRate";

it("Equivalent Monthly Rate", () => {
    expect(equivalentMonthlyRate(0.03)).toBeCloseTo(0.029595237, 6);
});
