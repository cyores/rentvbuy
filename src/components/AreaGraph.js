import React from "react";

// vx
import { ParentSize } from "@vx/responsive";
import { Threshold } from "@vx/threshold";
import { curveBasis } from "@vx/curve";
import { GridRows, GridColumns } from "@vx/grid";
import { scaleLinear } from "@vx/scale";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { Group } from "@vx/group";
import { LinePath } from "@vx/shape";

// util
const min = (arr, fn) => Math.min(...arr.map(fn));
const max = (arr, fn) => Math.max(...arr.map(fn));

export default function AreaGraph(props) {
    const { graphs } = props;
    let data = [];
    let labels = [];
    let xDomainUpper = 0;
    let lowestValue = 0;
    let highestValue = 0;
    let labelPos = [];
    if (!graphs) return <p>Fuck up</p>;
    if (graphs.length === 0) {
        return <p>Select a graph to view it</p>;
    }
    console.log("graphs", graphs);

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

                if (graphs[1]) {
                    data = [graphs[0].data, graphs[1].data];
                    labels = [graphs[0].label, graphs[1].label];
                    xDomainUpper = Math.max(data[0].length, data[1].length);
                    lowestValue = Math.min(min(data[0], y), min(data[1], y));
                    highestValue = Math.max(max(data[0], y), max(data[1], y));
                } else {
                    data = [graphs[0].data];
                    labels = [graphs[0].label];
                    xDomainUpper = data[0].length;
                    lowestValue = min(data[0], y);
                    highestValue = max(data[0], y);
                }

                // scalings
                const xScale = scaleLinear({
                    range: [0, xMax],
                    domain: [0, xDomainUpper],
                    nice: true
                });

                const yRange = Math.max(
                    Math.abs(highestValue),
                    Math.abs(lowestValue)
                );
                const yScale = scaleLinear({
                    range: [yMax, 0],
                    domain: [-yRange, yRange],
                    nice: true
                });

                if (graphs[1]) {
                    labelPos = [
                        [
                            xScale(x(data[0][data[0].length - 1])),
                            yScale(y(data[0][data[0].length - 1]))
                        ],
                        [
                            xScale(x(data[1][data[1].length - 1])),
                            yScale(y(data[1][data[1].length - 1]))
                        ]
                    ];
                } else {
                    labelPos = [
                        [
                            xScale(x(data[0][data[0].length - 1])),
                            yScale(y(data[0][data[0].length - 1]))
                        ]
                    ];
                }

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
                                    <React.Fragment key={`grapharea-${i}`}>
                                        <Threshold
                                            data={dataset}
                                            x={d => xScale(x(d))}
                                            y={d => yScale(y(d))}
                                            y0={d => yScale(y(d))}
                                            y1={yMax / 2}
                                            clipAboveTo={0}
                                            clipBelowTo={yMax}
                                            curve={curveBasis}
                                            belowAreaProps={{
                                                fill: "red",
                                                fillOpacity: 0.4
                                            }}
                                            aboveAreaProps={{
                                                fill: "green",
                                                fillOpacity: 0.4
                                            }}
                                        />
                                        <LinePath
                                            data={dataset}
                                            curve={curveBasis}
                                            x={d => xScale(x(d))}
                                            y={d => yScale(y(d))}
                                            stroke="rgba(0, 0, 0, 0.5)"
                                            strokeWidth={1.5}
                                        />
                                        {labelPos[i] && (
                                            <text
                                                x={labelPos[i][0]}
                                                y={labelPos[i][1]}
                                            >
                                                {labels[i]}
                                            </text>
                                        )}
                                    </React.Fragment>
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
                                            y: yMax / 2 + margin.bottom / 2,
                                            fill: "#000",
                                            textAnchor: "middle",
                                            fontSize: "var(--text-base-size)",
                                            fontFamily: "Raleway"
                                        }}
                                        tickLabelProps={(tickValue, index) => ({
                                            fill: "var(--color-text)",
                                            fontSize: "var(--text-sm)",
                                            textAnchor: "middle",
                                            y: 20,
                                            x: xScale(tickValue),
                                            fontFamily: "Raleway"
                                        })}
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
                                            fontSize: "var(--text-base-size)",
                                            fontFamily: "Raleway"
                                        }}
                                        tickLabelProps={(tickValue, index) => ({
                                            fill: "var(--color-text)",
                                            fontSize: "var(--text-sm)",
                                            textAnchor: "middle",
                                            y: yScale(tickValue) + 5,
                                            x: -27,
                                            fontFamily: "Raleway"
                                        })}
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
