import calculator from "../../utils/calculator";

xit("Equivalent Monthly Rate", () => {
    expect(calculator(1000000, 0.01, 10000, 0.03, 0.3, 1000, 25)).toEqual({
        buy: {},
        rent: {}
    });
});
