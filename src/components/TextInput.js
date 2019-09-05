import React, { Component } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    border-radius: 0 !important;
    background: transparent !important;
    border: 0px solid black !important;
    border-bottom: 2px solid #7a3dddab !important;
    font-size: 1.75rem !important;
    transition: all 0.15s ease-in-out !important;
    &:focus {
        border-radius: 0 !important;
        // background: #7a3dddab !important;
        background: rgba(0, 0 , 0, 0.1) !important;
        // color: #fff !important;
        border: 0px solid black !important;
        border-bottom: 2px solid #7b3ddd !important;
        font-size: 1.75rem !important;
    }
`;

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metric: this.props.metric
        };
    }
    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <StyledInput
                    className="u-full-width"
                    type={this.props.type}
                    step={this.props.step}
                    defaultValue={this.props.defaultValue}
                    placeholder={this.props.placeholder}
                    onKeyUp={this.props.onTyping}
                />
            </React.Fragment>
        );
    }
}

export default TextInput;
