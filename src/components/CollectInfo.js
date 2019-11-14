import React, { Component } from "react";
import styled from "styled-components";

// components
import Input from "./utils/Input";
import Flex from "./utils/Flex";

const Wrapper = styled.div``;

export default function CollectInfo(props) {
    return (
        <Wrapper>
            <Input
                type="number"
                step="0.01"
                defaultValue={props.VOP}
                label="Value of Property ($)"
                labelTop={true}
                onChange={input => props.handleChange(input, "VOP")}
            />

            <Input
                type="number"
                step="0.01"
                defaultValue={props.RENT}
                label="Monthly Rent at Property ($)"
                labelTop={true}
                onChange={input => props.handleChange(input, "RENT")}
            />
            <br></br>
            <p style={{ fontWeight: 700 }}>Advanced Options</p>
            <Flex>
                <div style={{ flex: "1" }}>
                    <Input
                        type="number"
                        step="0.01"
                        defaultValue={props.PTR}
                        label="Property Tax Rate (%)"
                        labelTop={true}
                        onChange={input => props.handleChange(input, "PTR")}
                    />
                </div>
                <div style={{ flex: "1" }}></div>
                <div style={{ flex: "1" }}>
                    <Input
                        type="number"
                        step="0.01"
                        defaultValue={props.LTT}
                        label="Land Transfer Tax ($)"
                        labelTop={true}
                        onChange={input => props.handleChange(input, "LTT")}
                    />
                </div>
            </Flex>
            <Flex>
                <div style={{ flex: "1" }}>
                    <Input
                        type="number"
                        step="0.01"
                        defaultValue={props.MR}
                        label="Mortgage Rate (%)"
                        labelTop={true}
                        onChange={input => props.handleChange(input, "MR")}
                    />
                </div>
                <div style={{ flex: "1" }}></div>
                <div style={{ flex: "1" }}>
                    <Input
                        type="number"
                        step="0.01"
                        defaultValue={props.DP}
                        label="Down Payment (%)"
                        labelTop={true}
                        onChange={input => props.handleChange(input, "DP")}
                    />
                </div>
            </Flex>
            <Flex>
                <div style={{ flex: "1" }}>
                    <Input
                        type="number"
                        step="0.01"
                        defaultValue={props.AP}
                        label="Amortization Period (years)"
                        labelTop={true}
                        onChange={input => props.handleChange(input, "AP")}
                    />
                </div>
            </Flex>
        </Wrapper>
    );
}
