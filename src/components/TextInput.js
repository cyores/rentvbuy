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
        background: rgba(0, 0, 0, 0.075) !important;
        border: 0px solid black !important;
        border-bottom: 2px solid #7b3ddd !important;
        font-size: 1.75rem !important;
    }
`;

const ToolTip = styled.label`
    position: relative;
    display: inline-block;
    &:hover {
        * {
            visibility: visible;
        }
    }
`;

const ToolTipText = styled.span`
    visibility: hidden;
    width: 120px;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    &::after {
        content: " ";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

    position: absolute;
    z-index: 1;
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
                {/* <label>{this.props.label}</label> */}
                <ToolTip>
                    {this.props.label}
                    {this.props.tooltip ? (
                        <ToolTipText className="text">
                            {this.props.tooltip}
                        </ToolTipText>
                    ) : null}
                </ToolTip>
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
