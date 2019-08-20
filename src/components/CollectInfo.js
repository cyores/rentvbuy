import React, { Component } from "react";
import styled from "styled-components";

// import Button from "./Button";
import TextInput from "./TextInput";

const StyledCollectInfo = styled.div``;

class CollectInfo extends Component {
    render() {
        return (
            <StyledCollectInfo>
                <div className="row">
                    <div className="u-full-width">
                        <TextInput
                            type="number"
                            step="0.01"
                            defaultValue={this.props.VOP}
                            label="Value of Property ($)"
                            onTyping={input =>
                                this.props.handleChange(input, "VOP")
                            }
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="u-full-width">
                        <TextInput
                            type="number"
                            step="0.01"
                            defaultValue={this.props.RENT}
                            label="Monthly Rent at Property ($)"
                            onTyping={input =>
                                this.props.handleChange(input, "RENT")
                            }
                        />
                    </div>
                </div>
                <br></br>
                <br></br>
                <h5>Advanced Options</h5>
                <div className="row">
                    <div className="six columns">
                        <TextInput
                            type="number"
                            step="0.01"
                            defaultValue={this.props.TAX}
                            label="Annual Taxes ($)"
                            onTyping={input =>
                                this.props.handleChange(input, "TAX")
                            }
                        />
                    </div>
                    <div className="six columns">
                        <TextInput
                            type="number"
                            step="0.01"
                            defaultValue={this.props.CF}
                            label="Monthly Condo Fee ($)"
                            onTyping={input =>
                                this.props.handleChange(input, "CF")
                            }
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <TextInput
                            type="number"
                            step="0.01"
                            defaultValue={this.props.MR}
                            label="Mortgage Rate (%)"
                            onTyping={input =>
                                this.props.handleChange(input, "MR")
                            }
                        />
                    </div>
                    <div className="six columns">
                        <TextInput
                            type="number"
                            step="0.01"
                            defaultValue={this.props.DP}
                            label="Down Payment (%)"
                            onTyping={input =>
                                this.props.handleChange(input, "DP")
                            }
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="six columns">
                        <TextInput
                            type="number"
                            step="0.01"
                            defaultValue={this.props.AP}
                            label="Amortization Period (years)"
                            onTyping={input =>
                                this.props.handleChange(input, "AP")
                            }
                        />
                    </div>
                    {/* <div className="six columns">
                        <TextInput
                            type="number"
                            step="0.01"
                            defaultValue={this.props.SMA}
                            label="Stock Market Appreciation (%)"
                            onChange={input =>
                                this.props.handleChange(input, "SMA")
                            }
                        />
                    </div> */}
                </div>
                {/* <div className="row">
                    <div className="six columns">
                        <TextInput
                            type="number"
                            step="0.01"
                            defaultValue={this.props.REA}
                            label="Real Estate Appreciation (%)"
                            onTyping={input =>
                                this.props.handleChange(input, "REA")
                            }
                        />
                    </div>
                    <div className="six columns"></div>
                </div> */}


            </StyledCollectInfo>
        );
    }
}

export default CollectInfo;
