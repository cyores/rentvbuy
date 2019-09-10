import calcDownpayment from "../utils/calculators/calcDownpayment";

it("calculate downpayment", () => {
    expect(calcDownpayment(1000000, 30)).toEqual(300000);
    expect(calcDownpayment(0, 30)).toEqual(0);
    expect(calcDownpayment(1000000, 0)).toEqual(0);

    expect(() => {
        calcDownpayment();
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcDownpayment(1);
    }).toThrow("Missing argument(s)");

    expect(() => {
        calcDownpayment(-1000000, 30);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcDownpayment(1000000, -30);
    }).toThrow("Values can't be less than 0");

    expect(() => {
        calcDownpayment(-1000000, -30);
    }).toThrow("Values can't be less than 0");
});
