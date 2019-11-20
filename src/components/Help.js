import React from "react";

// components
import Flex from "./utils/Flex";

export default function Help() {
    return (
        <Flex dir="col">
            <b>HELP</b>
            <b>Assumptions</b>
            <p>
                <b>Real Esate Appreciation:</b> 3% per year
            </p>
            <p>
                <b>Stock Market Appreciation:</b> 6% per year
            </p>
            <p>
                <b>Taxes:</b> 1% of the value of the property per year
            </p>
            <p>
                <b>Maintenance:</b> 1% of the value of the property per year
            </p>
            <p>
                <small>
                    <em>
                        Assumptions are obtained by looking at historical data
                        dating back to 1900
                    </em>
                </small>
            </p>

            <b>How To</b>
            <p>
                Fill out the details in the Calculator tab and click "CALCULATE"
                to see the results on the right. If you are unsure of what to
                put for a field, leave it as default.
            </p>
        </Flex>
    );
}
