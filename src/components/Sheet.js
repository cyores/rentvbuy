import React, { Component } from "react";
import styled from "styled-components";

const StyledSheet = styled.div`
    width: 100%;
    border-radius: 1.2rem;
    background-color: #cecece;
    text-align: center
`;

class Sheet extends Component {
    render() {
        return (
            <StyledSheet>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </StyledSheet>

        );
    }
}

export default Sheet;
