import React, { Component } from "react";

// vx
import { ParentSize } from "@vx/responsive";
import { AreaClosed } from "@vx/shape";
import { curveMonotoneX } from "@vx/curve";
import { GridRows, GridColumns } from "@vx/grid";
import { scaleLinear } from "@vx/scale";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { Group } from "@vx/group";
// import { withTooltip, Tooltip } from "@vx/tooltip";
// import { localPoint } from "@vx/event";
// import { bisector } from "d3-array";
// import { timeFormat } from "d3-time-format";

// util
const min = (arr, fn) => Math.min(...arr.map(fn));
const max = (arr, fn) => Math.max(...arr.map(fn));

class AreaGraph extends Component {
    state = {};
    render() {
        const { data } = this.props;

        console.log("data", this.props.data);

        return (
            <ParentSize>
                {({ width, height }) => {
                    // define margins
                    const margin = {
                        top: 10,
                        bottom: 60,
                        left: 60,
                        right: 10
                    };

                    // bounds
                    const xMax = width - margin.left - margin.right;
                    const yMax = height - margin.top - margin.bottom;

                    // x, y translations
                    const x = d => d.year + 0;
                    const y = d => d.value / 1000;

                    // scalings
                    const xScale = scaleLinear({
                        range: [0, xMax],
                        domain: [0, Math.max(data[0].length, data[1].length)],
                        nice: true
                    });

                    const lowestValue = Math.min(
                        min(data[0], y),
                        min(data[1], y)
                    );
                    const highestValue = Math.max(
                        max(data[0], y),
                        max(data[1], y)
                    );
                    const yRange = Math.max(
                        Math.abs(highestValue),
                        Math.abs(lowestValue)
                    );
                    const yScale = scaleLinear({
                        // range: [yMax, 0],
                        // domain: [0, Math.max(max(data[0], y), max(data[1], y))],
                        range: [yMax, 0],
                        domain: [-yRange, yRange],
                        nice: true
                    });

                    return (
                        <div>
                            <svg width={width} height={height}>
                                <rect
                                    x={0}
                                    y={0}
                                    width={width}
                                    height={height}
                                    fill="#fff"
                                    rx={14}
                                />

                                <Group
                                    left={margin.left}
                                    top={margin.top}
                                    right={margin.right}
                                >
                                    <GridRows
                                        lineStyle={{ pointerEvents: "none" }}
                                        scale={yScale}
                                        width={xMax}
                                        stroke="#cecece"
                                    />
                                    <GridColumns
                                        lineStyle={{ pointerEvents: "none" }}
                                        scale={xScale}
                                        height={yMax}
                                        stroke="#cecece"
                                    />
                                </Group>

                                <Group
                                    left={margin.left}
                                    top={margin.top}
                                    right={margin.right}
                                >
                                    {data.map((dataset, i) => (
                                        <AreaClosed
                                            key={`grapharea-${i}`}
                                            data={dataset}
                                            x={d => xScale(x(d))}
                                            y={d => yScale(y(d))}
                                            yScale={yScale}
                                            strokeWidth={1}
                                            stroke={"rgba(123, 61, 221, 1)"}
                                            // fill={`rgba(123, 61, 221, ${(1 + i) * 0.3})`}
                                            fill={`rgba(123, 61, 221, ${1 /
                                                (i + 2)})`}
                                            curve={curveMonotoneX}
                                        />
                                    ))}
                                </Group>

                                <Group left={margin.left} top={margin.top}>
                                    <>
                                        <AxisBottom
                                            top={yMax / 2}
                                            left={0}
                                            scale={xScale}
                                            numTicks={data[0].length / 2}
                                            stroke="#000"
                                            tickStroke="#000"
                                            label="Year"
                                            labelProps={{
                                                y: margin.bottom - 10,
                                                fill: "#000",
                                                textAnchor: "middle",
                                                fontSize: "var(--text-md)",
                                                fontFamily: "Raleway"
                                            }}
                                        />
                                        <AxisLeft
                                            top={0}
                                            left={0}
                                            scale={yScale}
                                            numTicks={10}
                                            label="Value (x1000)"
                                            labelProps={{
                                                fill: "#000",
                                                textAnchor: "middle",
                                                fontSize: "var(--text-md)",
                                                fontFamily: "Raleway"
                                            }}
                                        />
                                    </>
                                </Group>
                            </svg>
                        </div>
                    );
                }}
            </ParentSize>
        );
    }
}

export default AreaGraph;
