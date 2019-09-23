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
const extent = (arr, fn) => [min(arr, fn), max(arr, fn)];

class AreaGraph extends Component {
    state = {};
    render() {
        // const { data } = this.props;
        const data = this.props.data[0];
        const data2 = this.props.data[1];
        const x = d => d.year + 1;
        const y = d => d.value / 1000;
        const margin = {
            top: 10,
            bottom: 60,
            left: 60,
            right: 10
        };
        console.log("data", this.props.data);

        return (
            <ParentSize>
                {({ width, height }) => {
                    // bounds
                    const xMax = width - margin.left - margin.right;
                    const yMax = height - margin.top - margin.bottom;

                    const xScale = scaleLinear({
                        range: [1, xMax],
                        domain: extent(data, x),
                        nice: true
                    });

                    const yScale = scaleLinear({
                        range: [yMax, 0],
                        domain: [0, max(data, y) + yMax / 3],
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
                                    <AreaClosed
                                        data={data}
                                        x={d => xScale(x(d))}
                                        y={d => yScale(y(d))}
                                        yScale={yScale}
                                        strokeWidth={1}
                                        stroke={"rgb(123, 61, 221)"}
                                        fill={"rgba(123, 61, 221, 0.5)"}
                                        curve={curveMonotoneX}
                                    />
                                    <AreaClosed
                                        data={data2}
                                        x={d => xScale(x(d))}
                                        y={d => yScale(y(d))}
                                        yScale={yScale}
                                        strokeWidth={1}
                                        stroke={"rgb(125, 220, 231)"}
                                        fill={"rgba(125, 220, 231, 0.5)"}
                                        curve={curveMonotoneX}
                                    />
                                </Group>

                                <Group left={margin.left} top={margin.top}>
                                    <>
                                        <AxisBottom
                                            top={yMax}
                                            left={0}
                                            scale={xScale}
                                            numTicks={10}
                                            stroke="#000"
                                            tickStroke="#000"
                                            label="Year"
                                            labelProps={{
                                                y: margin.bottom - 10,
                                                fill: "#000",
                                                textAnchor: "middle",
                                                fontSize: "1.5rem",
                                                fontFamily: "Nunito"
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
                                                fontSize: "1.5rem",
                                                fontFamily: "Nunito"
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
