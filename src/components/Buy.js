import React, { Component } from "react";
import styled from "styled-components";

const StyledBuy = styled.div`
    background-color: #fff;
`;

class Buy extends Component {
    render() {
        return (
            <StyledBuy>
                <h5>Initial Costs</h5>
                <p>
                    <b>Downpayment ({this.props.data.DP}%): </b>$
                    {this.props.data.calcs.downpayment}
                </p>
                <h5>Monthly Costs</h5>
                <p>
                    <b>Property Tax: </b>${this.props.data.calcs.taxes}/mo
                </p>
                <p>
                    <b>Maintenance: </b>${this.props.data.calcs.maint}/mo
                </p>
                <p>
                    <b>Mortgage: </b>${this.props.data.calcs.pmt}/mo
                </p>
                <p>
                    <b>Total: </b>$
                    {this.props.data.calcs.taxes +
                        this.props.data.calcs.maint +
                        this.props.data.calcs.pmt}
                </p>
            </StyledBuy>
        );
    }
}

export default Buy;
