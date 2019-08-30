import React, { Component } from "react";
import styled from "styled-components";

const StyledSheet = styled.div`
    background-color: #fff;
    padding: 1.5rem;
    // margin: 0 auto;
    // text-align: center;
    & > hr {
        margin: 0 0 20px 0;
    }
`;

const MoveRight = styled.div`
    padding-left: 2rem;
`;

class Sheet extends Component {
    render() {
        const { initialCosts, monthlyCosts, type } = this.props;
        return (
            <StyledSheet>
                <div className="row">
                    <div className="column">
                        <h3>{this.props.title}</h3>
                        {this.props.subtitle ? (
                            <h6>
                                <em>{this.props.subtitle}</em>
                            </h6>
                        ) : null}
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="column">
                        <h5>Initial Costs</h5>
                        <MoveRight>
                            {Object.keys(initialCosts).map((key, index) => (
                                <p key={`ic-${type}-${index}`}>
                                    <b>{key}: </b>${initialCosts[key]}
                                </p>
                            ))}
                        </MoveRight>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h5>Monthly Costs</h5>
                        <MoveRight>
                            {Object.keys(monthlyCosts).map((key, index) => (
                                <p key={`mc-${type}-${index}`}>
                                    <b>{key}: </b>${monthlyCosts[key]}
                                </p>
                            ))}
                        </MoveRight>
                    </div>
                </div>
            </StyledSheet>
        );
    }
}

export default Sheet;
