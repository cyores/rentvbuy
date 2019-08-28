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
    padding-left: 1rem;
`;

class Sheet extends Component {
    render() {
        return (
            // <StyledSheet>
            //     <h3>{this.props.title}</h3>
            //     {this.props.subtitle ? <h6><em>{this.props.subtitle}</em></h6> : null}
            //     <hr></hr>
            //     {this.props.children}
            // </StyledSheet>
            <StyledSheet>
                <div className="row">
                    <div className="column">
                        <h1>{this.props.title}</h1>
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
                        <h3>Initial Costs</h3>
                        <MoveRight>
                            {this.props.type === "buy" ? (
                                <p>
                                    <b>Downpayment: </b>$
                                    {this.props.calcs.downpayment}
                                </p>
                            ) : null}
                            {this.props.type === "rent" ? (
                                <p>
                                    <b>Stock Market Investment: </b>$
                                    {this.props.calcs.downpayment}
                                </p>
                            ) : null}
                        </MoveRight>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h3>Monthly Costs</h3>
                        <MoveRight>
                            <h5>Sunk Costs</h5>
                            <MoveRight>
                                {this.props.type === "buy" ? (
                                    <>
                                        <p>
                                            <b>Property Tax: </b>$
                                            {this.props.calcs.taxes}
                                        </p>
                                        <p>
                                            <b>Maintenance: </b>$
                                            {this.props.calcs.maint}
                                        </p>
                                    </>
                                ) : null}
                                {this.props.type === "rent" ? (
                                    <>
                                        <p>
                                            <b>Rent: </b>$
                                            {this.props.calcs.rent}
                                        </p>
                                        <p>
                                            <b>Maintenance: </b>$0
                                        </p>
                                    </>
                                ) : null}
                            </MoveRight>
                            {this.props.type === "buy" ? (
                                <p>
                                    <b>Total Sunk Costs: </b>$
                                    {(
                                        this.props.calcs.taxes +
                                        this.props.calcs.maint
                                    ).toFixed(2)}
                                </p>
                            ) : null}
                            {this.props.type === "rent" ? (
                                <p>
                                    <b>Total Sunk Costs: </b>$
                                    {this.props.calcs.rent}
                                </p>
                            ) : null}
                            <MoveRight>
                                <h5>Equity Costs</h5>
                                <MoveRight>
                                    {this.props.type === "buy" ? (
                                        <p>
                                            <b>Mortgage: </b>$
                                            {this.props.calcs.pmt}
                                        </p>
                                    ) : null}
                                    {this.props.type === "rent" ? (
                                        <p>
                                            <b>Towards Stock Market: </b>$
                                            {this.props.calcs.taxes +
                                                this.props.calcs.maint +
                                                this.props.calcs.pmt -
                                                this.props.calcs.rent}
                                        </p>
                                    ) : null}
                                </MoveRight>
                            </MoveRight>
                        </MoveRight>
                        <p>
                            <b>Total Monthly Costs: </b>$
                            {this.props.type === "buy"
                                ? (
                                      this.props.calcs.taxes +
                                      this.props.calcs.maint +
                                      this.props.calcs.pmt
                                  ).toFixed(2)
                                : null}
                            {this.props.type === "rent"
                                ? this.props.calcs.rent
                                : null}
                        </p>
                    </div>
                </div>
            </StyledSheet>
        );
    }
}

export default Sheet;
