import React, { Component } from "react";
import styled from "styled-components";

const StyledSheet = styled.div`
    background-color: #fff;
    padding: 1.5rem;
    margin: 0 auto;
    // text-align: center;
`;

class Sheet extends Component {
    render() {
        return (
            <StyledSheet>
                <h3>{this.props.title}</h3>
                {this.props.subtitle ? <h6><em>{this.props.subtitle}</em></h6> : null}
                <hr></hr>
                {this.props.children}
            </StyledSheet>
        );
    }
}

export default Sheet;
