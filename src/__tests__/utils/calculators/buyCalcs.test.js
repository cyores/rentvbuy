import buyCalcs from "../../../utils/buyCalcs";

// Structure of returned object
// let calculations = {
//     initialCosts: {
//         Downpayment: 0,
//         Land_Transfer_Tax: 0,
//         Total: 0
//     },
//     monthlyCosts: {
//         Maintenance: 0,
//         Taxes: 0,
//         Mortgage_Payment: 0
//     },
//     endValue: {
//         Property_Value: 0,
//         Total_Sunk_Costs: 0,
//         Net: 0
//     },
//     graphData: {
//         propertyValue: [],
//         net: []
//     }
// };
// vop, mr, dpp, ltt, ap, ptr, rea

it("buy calculations", () => {
    let expectedResult = {
        initialCosts: {
            Downpayment: 360,
            Land_Transfer_Tax: 10,
            Total: 370
        },
        monthlyCosts: {
            Maintenance: 1,
            Taxes: 1,
            Mortgage_Payment: 8.11,
            Total: 10.11
        },
        endValue: {
            Property_Value: 1612.6996552129465,
            Total_Sunk_Costs: 431.55812753202844,
            Net: 1181.141527680918
        },
        graphData: {
            propertyValue: [
                { year: 1, value: 1236 },
                { year: 2, value: 1273.08 },
                { year: 3, value: 1311.2724 },
                { year: 4, value: 1350.610572 },
                { year: 5, value: 1391.12888916 },
                { year: 6, value: 1432.8627558348 },
                { year: 7, value: 1475.848638509844 },
                { year: 8, value: 1520.1240976651393 },
                { year: 9, value: 1565.7278205950936 },
                { year: 10, value: 1612.6996552129465 }
            ],
            sunkCosts: [
                { year: 1, value: 59.2 },
                { year: 2, value: 106.9564 },
                { year: 3, value: 153.225892 },
                { year: 4, value: 197.96386875999997 },
                { year: 5, value: 241.12438482279998 },
                { year: 6, value: 282.66011636748397 },
                { year: 7, value: 322.52231985850847 },
                { year: 8, value: 360.66078945426375 },
                { year: 9, value: 397.0238131378917 },
                { year: 10, value: 431.55812753202844 }
            ],
            net: [
                { year: 1, value: 408.92 },
                { year: 2, value: 472.5271999999999 },
                { year: 3, value: 540.9622160000001 },
                { year: 4, value: 614.3698824800001 },
                { year: 5, value: 692.8993789543999 },
                { year: 6, value: 776.7043603230321 },
                { year: 7, value: 865.943091132723 },
                { year: 8, value: 960.7785838667046 },
                { year: 9, value: 1061.3787413827058 },
                { year: 10, value: 1167.916503624187 }
            ]
        }
    };
    //              vop,  mr, dpp, ltt, ap, ptr, rea
    expect(buyCalcs(1200, 3, 30, 10, 10, 1, 0.03)).toEqual(expectedResult);

});
