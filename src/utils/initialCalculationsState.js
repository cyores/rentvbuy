export const initialState = {
    buy: {
        Mortgage_Principle: 0,
        initialCosts: {
            Downpayment: 0,
            Land_Transfer_Tax: 0,
            Total: 0
        },
        monthlyCosts: {
            Taxes: 0,
            Maintenance: 0,
            Mortgage_Payment: 0,
            Total: 0
        },
        afterPeriod: {
            Property_Value: 0,
            Total_Sunk_Costs: 0,
            Net: 0
        },
        analysis: {
            Difference_To_Rent: 0
        },
        graphData: {
            monthlyCosts: {
                Taxes: [],
                Maintenance: [],
                Mortgage_Payment: [],
                Total: []
            },
            afterPeriod: {
                Property_Value: [],
                Total_Sunk_Costs: [],
                Net: []
            }
        }
    },
    rent: {
        initialCosts: {
            Stock_Investment: 0,
            Total: 0
        },
        monthlyCosts: {
            Rent: 0,
            Stock_Investment: 0,
            Total: 0
        },
        afterPeriod: {
            Investments_Value: 0,
            Total_Sunk_Costs: 0,
            Net: 0
        },
        analysis: {
            Difference_To_Buy: 0
        },
        graphData: {
            monthlyCosts: {
                Rent: [],
                Stock_Investment: [],
                Total: []
            },
            afterPeriod: {
                Investments_Value: [],
                Total_Sunk_Costs: [],
                Net: []
            }
        }
    },

    donecalcs: false
};
