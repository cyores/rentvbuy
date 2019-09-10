import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

class Button extends Component {
    render() {
        return (
            <StyledButton
                className={this.props.className}
                type={this.props.type}
                onClick={this.props.onPress}
                disabled={this.props.isDisabled}
            >
                {this.props.text}
            </StyledButton>
        );
    }
}

export default Button;
