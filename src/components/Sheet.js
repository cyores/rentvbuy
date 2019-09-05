import React, { Component } from "react";
import styled from "styled-components";

const StyledSheet = styled.div`
    background-color: #fff;
    padding: 1.5rem;
    // margin: 0 auto;
    // text-align: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    & > hr {
        margin: 0 0 20px 0;
    }
`;

const MoveRight = styled.div`
    padding-left: 2rem;
`;

class Sheet extends Component {
    formatKeyText(key) {
        while (key.includes("_")) {
            key = key.replace("_", " ");
        }
        return key;
    }

    render() {
        const {
            initialCosts,
            monthlyCosts,
            afterPeriod,
            type,
            period
        } = this.props;
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
                                    <b>{this.formatKeyText(key)}: </b>$
                                    {initialCosts[key]}
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
                                    <b>{this.formatKeyText(key)}: </b>$
                                    {monthlyCosts[key]}
                                </p>
                            ))}
                        </MoveRight>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h5>After {period} Years</h5>
                        <MoveRight>
                            {Object.keys(afterPeriod).map((key, index) => (
                                <p key={`ap-${type}-${index}`}>
                                    <b>{this.formatKeyText(key)}: </b>$
                                    {afterPeriod[key]}
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
