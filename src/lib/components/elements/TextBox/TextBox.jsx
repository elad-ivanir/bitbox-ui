import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/useTheme";
import { StyledTextBox } from "./TextBox.styles";

const TextBox = ({
    onChange,
    value = undefined,
    defaultValue = undefined,
    maxLength = undefined,
    disabled = false,
    required = false,
}) => {
    const [inputValue, setInputValue] = useState(value);
    const theme = useTheme();

    const handleChange = e => {
        setInputValue(e.target.value)
        onChange(e.target.value)
    };

     return (
        <ThemeProvider theme={theme}>
            <StyledTextBox
                type="text"
                name="styledTextBox"
                onChange={handleChange}
                value={inputValue}
                defaultValue={defaultValue}
                disabled={disabled}
                required={required}
                maxLength={maxLength}
            />
        </ThemeProvider>
    );
};

export default TextBox;
