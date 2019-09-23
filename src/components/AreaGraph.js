import React, { Component } from "react";

// vx
import { ParentSize } from "@vx/responsive";
import { AreaClosed, Line, Bar } from "@vx/shape";
import { curveMonotoneX } from "@vx/curve";
import { GridRows, GridColumns } from "@vx/grid";
import { scaleTime, scaleLinear } from "@vx/scale";
import { withTooltip, Tooltip } from "@vx/tooltip";
import { localPoint } from "@vx/event";
import { bisector } from "d3-array";
import { timeFormat } from "d3-time-format";

// util
const min = (arr, fn) => Math.min(...arr.map(fn));
const max = (arr, fn) => Math.max(...arr.map(fn));
const extent = (arr, fn) => [min(arr, fn), max(arr, fn)];

class AreaGraph extends Component {
    state = {};
    render() {
        const { data } = this.props;
        const x = d => d.year;
        const y = d => d.value;
        const margin = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        console.log("data", data);

        return (
            <ParentSize>
                {({ width, height }) => {
                    // bounds
                    const xMax = width - margin.left - margin.right;
                    const yMax = height - margin.top - margin.bottom;

                    const xScale = scaleLinear({
                        range: [0, xMax],
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
                            </svg>
                        </div>
                    );
                }}
            </ParentSize>
        );
    }
}

export default AreaGraph;
