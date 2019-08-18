import React, { Component } from "react";
import styled from "styled-components";

const GradBorder = styled.div`
    padding: 2px;
    background: linear-gradient(-30deg, #7ddce7, #7de7bd);
`;

const StyledSheet = styled.div`
    width: 100%;
    background-color: #fff;
    text-align: center;
`;

class Sheet extends Component {
    render() {
        return (
            <GradBorder>
                <StyledSheet>
                    <h2>{this.props.title}</h2>
                    {this.props.children}
                </StyledSheet>
            </GradBorder>
        );
    }
}

export default Sheet;
