import React from "react";
import styled from "styled-components";

// components
import Flex from "./Flex";

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: var(--space-md);
`;

const StyledInput = styled.input`
    flex: 1;
    font-size: var(--text-base-size);
    height: var(--text-lg);
    background: transparent;
    border: none;
    border-bottom: 2px solid var(--color-primary-transparent);
    padding: var(--space-xs);
    outline: none;
    transition: all 0.25s ease-in-out;
    &:focus {
        background: rgba(0, 0, 0, 0.1);
        border-bottom: 2px solid var(--color-primary);
    }
`;

const Label = styled.label`
    flex: 1;
    // font-weight: 700;
    display: inline-block;
    padding: var(--space-sm);
`;

const LabelTop = styled.label`
    flex: 1 1 100%;
    // font-weight: 700;
    display: block;
    padding: 0;
`;

const RCWrapper = styled.label`
    flex: 1 0 auto;
    display: block;
    position: relative;
    padding-left: var(--text-xxl);
    cursor: pointer;
    user-select: none;
    transition: all 0.25s ease-in-out;
    &:hover input ~ span {
        box-shadow: 0 2px 6px var(--color-shadow);
        opacity: 1;
    }
    & input:checked ~ span:after {
        display: block;
        opacity: 1;
    }
    & input:checked ~ span {
        opacity: 1;
        background: var(--color-primary);
    }
`;

const RadioCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    outline: none;
`;

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: var(--text-lg);
    width: var(--text-lg);
    background: rgba(255, 255, 255, 0.75);
    border: 2px solid var(--color-primary);
    border-radius: 4px;
    opacity: 0.85;
    transition: all 0.25s ease-in-out;
    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 8px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
`;

const Radio = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: var(--text-lg);
    width: var(--text-lg);
    background: rgba(255, 255, 255, 0.75);
    border-radius: 50%;
    border: 2px solid var(--color-primary);
    opacity: 0.85;
    transition: all 0.25s ease-in-out;
    &:after {
        content: "";
        position: absolute;
        display: none;
        top: calc((var(--text-lg) / 2) - (var(--text-sm) / 2));
        left: calc((var(--text-lg) / 2) - (var(--text-sm) / 2));
        border-radius: 50%;
        width: var(--text-sm);
        height: var(--text-sm);
        background-color: white;
    }
`;

export default function Input(props) {
    const {
        type,
        placeholder,
        defaultValue,
        step,
        min,
        onChange,
        label,
        labelTop,
        name,
        value
    } = props;
    return (
        <Wrapper>
            <Flex>
                {type === "radio" || type === "checkbox" ? (
                    <RCWrapper>
                        {label}
                        <RadioCheckbox
                            type={type}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            defaultChecked={defaultValue}
                            name={name}
                            value={value}
                            onChange={onChange}
                        ></RadioCheckbox>
                        {type === "radio" ? <Radio /> : <Checkmark />}
                    </RCWrapper>
                ) : (
                    <>
                        {labelTop ? (
                            <LabelTop>{label}</LabelTop>
                        ) : (
                            <Label>{label}</Label>
                        )}
                        <StyledInput
                            type={type}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                            step={step}
                            min={min}
                            onChange={onChange}
                        />
                    </>
                )}
            </Flex>
        </Wrapper>
    );
}
