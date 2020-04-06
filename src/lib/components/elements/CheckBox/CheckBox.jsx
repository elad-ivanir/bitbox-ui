import React from "react";
import PropTypes from "prop-types";
// import { ThemeProvider } from "styled-components";
import { GoCheck } from "react-icons/go";
import booleanInputPropTypes from "../../../propTypes/booleanInputPropTypes";
import { StyledWrapper } from "./CheckBox.styles";

/*
  TODO: (after theme provider is merged):
  * add withTheme HOC to CheckBox in export line
  * uncomment ThemeProvider lines
*/

// is it worth renaming value to isChecked?
const CheckBox = ({
  id,
  name,
  text,
  disabled,
  value,
  onChange,
  icon: Icon = GoCheck,
  theme
}) => (
  // <ThemeProvider theme={theme}>
  <StyledWrapper>
    <input
      id={id}
      name={name}
      onChange={onChange}
      checked={value}
      type="checkbox"
      className="bui-checkbox--input"
    />
    <span className="bui-checkbox--view">
      <Icon className="bui-checkbox--view--icon" />
    </span>
  </StyledWrapper>
  // </ThemeProvider>
);

CheckBox.propTypes = {
  ...booleanInputPropTypes,
  text: PropTypes.string,
  icon: PropTypes.node
};

export default CheckBox;
