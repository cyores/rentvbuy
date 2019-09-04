import React, { Component } from "react";
import styled from "styled-components";

const StyledVerdict = styled.div`
    background-color: #fff;
    background: linear-gradient(-30deg, #7ddce7, #7de7bd);
    color: #333;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;

    h4 {
        margin: 0;
    }
`;

class Verdict extends Component {
    render() {
        return (
            <StyledVerdict className="u-full-width">
                <h4>
                    You should <b className="fancy-underline">{this.props.rentOrBuy}</b>
                </h4>
            </StyledVerdict>
        );
    }
}

export default Verdict;
