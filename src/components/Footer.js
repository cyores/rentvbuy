import React from "react";
import styled from "styled-components";

// components
import Flex from "./utils/Flex";

const NavItem = styled.div`
    flex: 1;
    cursor: pointer;
    padding: var(--space-sm) 0;
    text-align: center;
    &:hover {
        background: var(--color-primary-transparent);
    }
`;

export default function Footer(props) {
    return (
        <>
            <Flex>
                <NavItem
                    onClick={() => {
                        props.changeView("calculator");
                    }}
                >
                    Calculator
                </NavItem>

                <NavItem
                    onClick={() => {
                        props.changeView("about");
                    }}
                >
                    About
                </NavItem>

                <NavItem
                    onClick={() => {
                        props.changeView("help");
                    }}
                >
                    Help
                </NavItem>
            </Flex>
            <Flex>
                <small>
                    <em>made by christian yores</em>
                </small>
            </Flex>
        </>
    );
}
