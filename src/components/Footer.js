import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
    position: absolute;
    width: 100%;
    margin: 0;
    left: 0;
    bottom: 2rem;
    text-align: center;
`;

class Footer extends Component {
    render() {
        var calculatorClasses = this.props.view === "calculator" ? "active" : "";
        var aboutClasses = this.props.view === "about" ? "active" : "";
        var helpClasses = this.props.view === "help" ? "active" : "";
        return (
            <StyledFooter>
                <div className="row">
                    <div
                        className={"four columns nav-item " + calculatorClasses}
                        onClick={() => {
                            this.props.changeView("calculator");
                        }}
                    >
                        <p>Calculator</p>
                    </div>
                    <div
                        className={"four columns nav-item " + aboutClasses}
                        onClick={() => {
                            this.props.changeView("about");
                        }}
                    >
                        <p>About</p>
                    </div>
                    <div
                        className={"four columns nav-item " + helpClasses}
                        onClick={() => {
                            this.props.changeView("help");
                        }}
                    >
                        <p>Help</p>
                    </div>
                </div>
                <div className="row p-0 m-0">
                    <div className="u-full-width">
                        <p>
                            <small>
                                <em style={{ color: "#777" }}>
                                    made by christian yores
                                </em>
                            </small>
                        </p>
                    </div>
                </div>
            </StyledFooter>
        );
    }
}

export default Footer;
