import React from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/useTheme";
import { StyledButton } from "./Button.styles";

const Button = ({
    onClick,
    text = "בסדר",
    disabled = false,
}) => {
    const theme = useTheme();

     return (
        <ThemeProvider theme={theme}>
            <StyledButton onClick={onClick}>
                {text}
            </StyledButton>
        </ThemeProvider>
    );
};

export default Button;
