import React, { Component } from "react";
import styled from "styled-components";

const StyledHelp = styled.div``;

class Help extends Component {
    render() {
        return (
            <StyledHelp>
                <div className="row">
                    <div className="eleven columns">
                        <h4>HELP</h4>
                        <h5>Assumptions</h5>
                        <p>
                            <b>Real Esate Appreciation:</b> 3% per year
                        </p>
                        <p>
                            <b>Stock Market Appreciation:</b> 6% per year
                        </p>
                        <p>
                            <b>Taxes (if left 0):</b> 1% of the value of the
                            property per year
                        </p>
                        <p>
                            <b>Maintenance (if left 0):</b> 1% of the value of
                            the property per year
                        </p>
                        <p>
                            <b>Maintenance (if not left 0):</b> 0.5% of the
                            value of the property per year plus the condo fee entered per
                            month
                        </p>
                        <p>
                            <small>
                                <em>
                                    Assumptions are obtained by looking at
                                    historical data dating back to 1900
                                </em>
                            </small>
                        </p>

                        <h5>How To</h5>
                        <p>
                            Fill out the details in the Calculator tab and click
                            "CALCULATE" to see the results on the right. If you
                            are unsure of what to put for a field, leave it as
                            default. If TAXES or MAINTENANCE are left as 0, the
                            above assumptions will be used.
                        </p>
                    </div>
                </div>
            </StyledHelp>
        );
    }
}

export default Help;
