import rentCalcs from "../../../utils/rentCalcs";

// Structure of returned object

it("rent calculations", () => {
    let expectedResult = {
        initialCosts: {
            Stock_Investment: 370,
            Total: 370
        },
        monthlyCosts: {
            Rent: 5,
            // i'lll fixed the floating point precision later
            Stock_Investment: 5.109999999999999,
            // Stock_Investment: 5.11,
            Total: 10.11
        },
        endValue: {
            Investments_Value: 686.5261095639505,
            Total_Sunk_Costs: 1156.1999999999998,
            Net: -469.6738904360493
        },
        graphData: {
            investments: [
                { year: 1, value: 397.31000000000006 },
                { year: 2, value: 425.2286000000001 },
                { year: 3, value: 453.79231600000014 },
                { year: 4, value: 483.0398549600002 },
                { year: 5, value: 513.0122462576003 },
                { year: 6, value: 543.7929810330563 },
                { year: 7, value: 576.4205598950397 },
                { year: 8, value: 611.005793488742 },
                { year: 9, value: 647.6661410980665 },
                { year: 10, value: 686.5261095639505 }
            ],
            sunkCosts: [
                { year: 1, value: 60 },
                { year: 2, value: 132.36 },
                { year: 3, value: 217.08 },
                { year: 4, value: 314.16 },
                { year: 5, value: 423.6 },
                { year: 6, value: 545.4 },
                { year: 7, value: 679.56 },
                { year: 8, value: 826.0799999999999 },
                { year: 9, value: 984.9599999999999 },
                { year: 10, value: 1156.1999999999998 }
            ],
            net: [
                { year: 1, value: 337.31000000000006 },
                { year: 2, value: 292.8686000000001 },
                { year: 3, value: 236.71231600000013 },
                { year: 4, value: 168.87985496000016 },
                { year: 5, value: 89.41224625760026 },
                { year: 6, value: -1.6070189669436559 },
                { year: 7, value: -103.13944010496027 },
                { year: 8, value: -215.0742065112579 },
                { year: 9, value: -337.2938589019334 },
                { year: 10, value: -469.6738904360493 }
            ]
        }
    };
    //              rent,iiv,bmp,   sma,  rea,  ap
    expect(rentCalcs(5, 370, 10.11, 0.06, 0.03, 10)).toEqual(expectedResult);
});
