import React from "react";

// components
import Flex from "./utils/Flex";

export default function About() {
    return (
        <Flex dir="col">
            <div style={{ flex: "1" }}>
                <b>ABOUT</b>
                <p>
                    This tool was built to help shed some light on the financial
                    side of the rent vs buy decision. It is meant as an aid in
                    the decision making process, not as a hard rule to follow.
                    There are many things to consider (both financial and
                    non-financial) when determining whether to buy a home or
                    rent a home. This tool attempts to take into account as many
                    of the financial factors as possible but is not a guarantee
                    of anything. Predicting the future is very hard and requires
                    a lot of assumptions that could prove to be untrue. The
                    assumptions used in the tool (and the inspiration for it)
                    come from this video created by Ben Felix on the subject of
                    rent vs buy.
                </p>
            </div>

            <div style={{ flex: "1" }}>
                <iframe
                    title="Ben Felix Video"
                    width="100%"
                    height="250px"
                    src="https://www.youtube-nocookie.com/embed/Uwl3-jBNEd4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div style={{ flex: "1" }}>
                <p>
                    <small>
                        I am not a financial expert, this is not financial
                        advice. Follow it at your own peril.
                    </small>
                </p>
            </div>
        </Flex>
    );
}
