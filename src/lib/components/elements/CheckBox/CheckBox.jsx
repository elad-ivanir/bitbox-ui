import React from "react";
import PropTypes from "prop-types";
// TODO: (after merge with theme context) import withTheme
import booleanInputPropTypes from "../../../propTypes/booleanInputPropTypes";
import { WrapperLabel } from "./CheckBox.styles";

const CheckBox = ({ id, name, text, disabled, value, onChange, theme }) => (
  <WrapperLabel>
    <input type="checkbox" className="bui-checkbox--input" />
    <span className="bui-checkbox--view"></span>
  </WrapperLabel>
);

CheckBox.propTypes = { ...booleanInputPropTypes, text: PropTypes.string };

export default CheckBox; // TODO: add withTheme hoc
