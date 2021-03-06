import React from "react";
import styled from "styled-components";
import contentPlaceholder from "./images/undraw_buy_house.svg";

// Components
import About from "./components/About";
import Help from "./components/Help";
import Sheet from "./components/Sheet";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";
import AreaGraph from "./components/AreaGraph";
import Flex from "./components/utils/Flex";
import Input from "./components/utils/Input";

const GraphWrapper = styled.div`
    height: 40vh;
    background: white;
    padding: var(--space-md);
    margin-bottom: var(--space-md);
`;

const Left = styled.div`
    position: fixed;
    width: 25vw;
    height: 100vh;
    background: var(--color-a-c-gradient);
    @media (max-width: 768px) {
        position: relative;
        width: 100vw;
        height: auto;
    }
`;

const Right = styled.div`
    margin-left: 25vw;
    padding: var(--space-md);
    min-height: 100vh;
    @media (max-width: 768px) {
        width: 100vw;
        margin-left: 0;
        height: auto;
        padding: 0;
    }
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            VOP: 0, // value of property
            RENT: 0, // rent
            PTR: 1.0, // property tax rate
            LTT: 0, // Land Transfer Tax
            CF: 0, // condo fee
            MR: 3.0, // mortgage rate
            DP: 30, // down payment percentage
            AP: 25, // amortization period
            REA: 0.03, // real estate appriciation
            SMA: 0.06, // stock market appriciation
            calcs: {
                donecalcs: false
            },
            view: "calculator",
            showRentGraph: true,
            showBuyGraph: true,
            showOnGraph: []
        };
        this.receiveFromCalculator = this.receiveFromCalculator.bind(this);
        this.changeView = this.changeView.bind(this);
    }

    receiveFromCalculator(s) {
        this.setState(s);
        console.log("app state", this.state);
    }

    changeView(view) {
        this.setState({ view: view });
    }

    changeGraphData(input, hideLabel) {
        let value = input.target.checked;
        let newGraphs = [];
        if (value) {
            // we need to show something
            newGraphs = this.state.showOnGraph;
            if (hideLabel === "Rent") {
                newGraphs.push({
                    label: "Rent",
                    data: this.state.calcs.rent.graphData.afterPeriod.Net
                });
            } else if (hideLabel === "Buy") {
                newGraphs.push({
                    label: "Buy",
                    data: this.state.calcs.buy.graphData.afterPeriod.Net
                });
            }
        } else {
            // we need to hide something
            newGraphs = this.state.showOnGraph.filter(graph => {
                return graph.label !== hideLabel;
            });
        }
        this.setState({ showOnGraph: newGraphs });
    }

    render() {
        const { showRentGraph, showBuyGraph } = this.state;
        return (
            <>
                <Left>
                    <Flex
                        dir="col"
                        style={{ justifyContent: "flex-start", height: "100%" }}
                    >
                        <div style={{ padding: "0 var(--space-sm)" }}>
                            <h3 className="fancy-underline">Rent vs Buy</h3>
                            {this.state.view === "calculator" ? (
                                <Calculator
                                    defaultState={this.state}
                                    sendToApp={this.receiveFromCalculator}
                                />
                            ) : null}
                            {this.state.view === "about" ? <About /> : null}
                            {this.state.view === "help" ? <Help /> : null}
                        </div>
                        <div style={{ marginTop: "auto" }}>
                            <Footer changeView={this.changeView} />
                        </div>
                    </Flex>
                </Left>

                <Right>
                    {this.state.calcs.donecalcs ? (
                        <Flex dir="col" style={{ height: "100%" }}>
                            <br></br>
                            <Flex>
                                <div style={{ flex: "1" }}>
                                    <Flex>
                                        <div style={{ flex: "66" }}>
                                            <Flex dir="rowleft">
                                                <h5 style={{ marginTop: 0 }}>
                                                    Rent vs Buy Net Value Over
                                                    Time
                                                </h5>
                                            </Flex>
                                        </div>
                                        <div style={{ flex: "33" }}>
                                            <Flex dir="rowright">
                                                <div
                                                    style={{
                                                        flex: "0",
                                                        margin:
                                                            "0 var(--space-sm)"
                                                    }}
                                                >
                                                    <h6
                                                        style={{ marginTop: 0 }}
                                                    >
                                                        Show
                                                    </h6>
                                                </div>
                                                <div
                                                    style={{
                                                        flex: "0",
                                                        margin:
                                                            "0 var(--space-sm)"
                                                    }}
                                                >
                                                    <Input
                                                        type="checkbox"
                                                        defaultValue={
                                                            showRentGraph
                                                        }
                                                        label="Rent"
                                                        labelTop={true}
                                                        onChange={input =>
                                                            this.changeGraphData(
                                                                input,
                                                                "Rent"
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    style={{
                                                        flex: "0",
                                                        margin:
                                                            "0 var(--space-sm)"
                                                    }}
                                                >
                                                    <Input
                                                        type="checkbox"
                                                        defaultValue={
                                                            showBuyGraph
                                                        }
                                                        label="Buy"
                                                        labelTop={true}
                                                        onChange={input =>
                                                            this.changeGraphData(
                                                                input,
                                                                "Buy"
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </Flex>
                                        </div>
                                    </Flex>

                                    <GraphWrapper>
                                        <AreaGraph
                                            graphs={this.state.showOnGraph}
                                            divisor={1000}
                                            canBeNegative={true}
                                        ></AreaGraph>
                                    </GraphWrapper>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{ flex: "50" }}>
                                    <Sheet
                                        type={"buy"}
                                        title={"Buy"}
                                        subtitle={
                                            "5% Rule: $" +
                                            this.state.calcs.percentRule
                                        }
                                        initialCosts={
                                            this.state.calcs.buy.initialCosts
                                        }
                                        monthlyCosts={
                                            this.state.calcs.buy.monthlyCosts
                                        }
                                        period={this.state.AP}
                                        afterPeriod={
                                            this.state.calcs.buy.afterPeriod
                                        }
                                        graphData={
                                            this.state.calcs.buy.graphData
                                        }
                                    ></Sheet>
                                </div>
                                <div style={{ flex: "1" }}></div>
                                <div style={{ flex: "50" }}>
                                    <Sheet
                                        type={"rent"}
                                        title={"Rent"}
                                        subtitle={
                                            "Assumption: the downpayment is invested in the stock market."
                                        }
                                        initialCosts={
                                            this.state.calcs.rent.initialCosts
                                        }
                                        monthlyCosts={
                                            this.state.calcs.rent.monthlyCosts
                                        }
                                        period={this.state.AP}
                                        afterPeriod={
                                            this.state.calcs.rent.afterPeriod
                                        }
                                        graphData={
                                            this.state.calcs.rent.graphData
                                        }
                                    ></Sheet>
                                </div>
                            </Flex>
                        </Flex>
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                flexFlow: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100vh"
                            }}
                        >
                            <div>
                                <img
                                    alt=""
                                    src={contentPlaceholder}
                                    width="500px"
                                    height="auto"
                                    style={{
                                        opacity: "0.9",
                                        margin: "2rem",
                                        maxWidth: "80vw"
                                    }}
                                />
                            </div>
                            <div>
                                <p>
                                    Fill out the details to the left to see a
                                    full analysis of the Rent Vs Buy decision
                                </p>
                            </div>
                        </div>
                    )}
                </Right>
            </>
        );
    }
}

export default App;
