import React from "react";
import styled from "styled-components";

const Base = styled.div`
    margin-right: var(--space-xs);
    margin-left: var(--space-xs);
    & > button {
        min-width: 3em;
        text-transform: uppercase;
        letter-spacing: 0.15rem;
        // font-weight: 100;
        font-size: var(--text-sm);
        padding: var(--space-md);
        margin: var(--sapce-sm);
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        transition: all 0.25s ease-in-out;
        &:hover {
            box-shadow: inset 0 0 0 100vh rgba(255, 255, 255, 0.05),
                0 2px 4px var(--box-shadow-color);
        }
        &:active {
            box-shadow: inset 0 0 0 100vh rgba(0, 0, 0, 0.1);
        }
    }
`;

const Primary = styled.button`
    border: 1px solid var(--color-primary);
    background: var(--color-primary);
    color: rgba(255, 255, 255, 91);
    &:hover {
        --box-shadow-color: var(--color-primary);
    }
`;

const Complement = styled.button`
    border: 1px solid var(--color-complement);
    background: var(--color-complement);
    color: rgba(255, 255, 255, 91);
    &:hover {
        border: 1px solid var(--color-complement);
        --box-shadow-color: var(--color-complement);
    }
`;

const Full = styled.button`
    border: 1px solid var(--color-primary);
    background: var(--color-primary);
    color: rgba(255, 255, 255, 91);
    width: 100%;
    &:hover {
        --box-shadow-color: var(--color-primary);
    }
`;

const FullOutline = styled.button`
    background: transparent;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    width: 100%;
    &:hover {
        background: var(--color-primary);
        color: var(--color-text-light);
        --box-shadow-color: var(--color-primary);
    }
`;

const Outline = styled.button`
    background: transparent;
    border: 3px solid var(--color-primary);
    color: var(--color-primary);
    &:hover {
        background: var(--color-primary);
        color: rgba(255, 255, 255, 91);
        --box-shadow-color: rgba(0, 0, 0, 0.16);
    }
`;

const Danger = styled.button`
    border: 1px solid var(--color-danger);
    background: var(--color-danger);
    color: rgba(255, 255, 255, 91);
    &:hover {
        --box-shadow-color: var(--color-danger);
    }
`;

const Disabled = styled.button`
    border: 1px solid #bcbcbc;
    background: #bcbcbc;
    &:hover {
        cursor: not-allowed;
    }
`;

const FullDisabled = styled.button`
    border: 1px solid #bcbcbc;
    background: #bcbcbc;
    width: 100%;
    &:hover {
        cursor: not-allowed;
    }
`;

const Transparent = styled.button`
    background: transparent;
    border: 1px solid transparent;
    color: var(--color-primary);
`;

export default function Button(props) {
    return (
        <>
            <Base
                onClick={props.onClick ? () => props.onClick() : null}
                style={props.style}
            >
                {props.theme === "primary" ? (
                    <Primary tabIndex={props.tabIndex}>
                        {props.children}
                    </Primary>
                ) : null}
                {props.theme === "complement" ? (
                    <Complement tabIndex={props.tabIndex}>
                        {props.children}
                    </Complement>
                ) : null}
                {props.theme === "full" ? (
                    <Full tabIndex={props.tabIndex}>{props.children}</Full>
                ) : null}
                {props.theme === "outline" ? (
                    <Outline tabIndex={props.tabIndex}>
                        {props.children}
                    </Outline>
                ) : null}
                {props.theme === "full-outline" ? (
                    <FullOutline tabIndex={props.tabIndex}>
                        {props.children}
                    </FullOutline>
                ) : null}
                {props.theme === "danger" ? (
                    <Danger tabIndex={props.tabIndex}>{props.children}</Danger>
                ) : null}
                {props.theme === "disabled" ? (
                    <Disabled
                        disabled={props.disabled}
                        tabIndex={props.tabIndex}
                    >
                        {props.children}
                    </Disabled>
                ) : null}
                {props.theme === "full-disabled" ? (
                    <FullDisabled
                        disabled={props.disabled}
                        tabIndex={props.tabIndex}
                    >
                        {props.children}
                    </FullDisabled>
                ) : null}
                {props.theme === "transparent" ? (
                    <Transparent tabIndex={props.tabIndex}>
                        {props.children}
                    </Transparent>
                ) : null}
                {!props.theme ? <Primary>{props.children}</Primary> : null}
            </Base>
        </>
    );
}
