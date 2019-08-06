import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input``

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
                    onChange={this.props.Typing}
                />
            </React.Fragment>
         );
    }
}
 
export default TextInput;
