import React, { Component } from "react";
import styled from "styled-components";

const StyledRent = styled.div`
    background-color: #fff;
`;

class Rent extends Component {
    render() {
        return (
            <StyledRent>
                <h5>Initial Costs</h5>
                <p><b>Stock market investment: </b>${this.props.data.calcs.downpayment}</p>
                <h5>Monthly Costs</h5>
                <p><b>Rent: </b>${this.props.data.calcs.rent}/mo</p>
            </StyledRent>
        );
    }
}

export default Rent;
