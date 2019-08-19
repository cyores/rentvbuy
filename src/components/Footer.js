import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    position: absolute;
    width: 100%;
    margin: 0;
    left: -0.75rem;
    bottom: 2rem;
    text-align: center;

`;

class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <div className="row">
                    <div className="four columns">
                        <p>Calculator</p>
                    </div>
                    <div className="four columns">
                        <p>About</p>
                    </div>
                    <div className="four columns">
                        <p>Help</p>
                    </div>
                </div>
                <div className="row p-0 m-0">
                    <div className="u-full-width">
                    <p><small><em style={{color: "#777"}}>made by christian yores</em></small></p>
                    </div>
                </div>
            </StyledFooter>
        );
    }
}

export default Footer;
