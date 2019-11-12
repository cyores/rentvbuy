import React, { Component } from "react";
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

class Footer extends Component {
    render() {
        return (
            <>
                <Flex>
                    <NavItem
                        onClick={() => {
                            this.props.changeView("calculator");
                        }}
                    >
                        Calculator
                    </NavItem>

                    <NavItem
                        onClick={() => {
                            this.props.changeView("about");
                        }}
                    >
                        About
                    </NavItem>

                    <NavItem
                        onClick={() => {
                            this.props.changeView("help");
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
}

export default Footer;
