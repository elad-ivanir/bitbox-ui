import React from "react";
import PropTypes from "prop-types";
import generalPropTypes from "../../../propTypes/generalPropTypes";
import { Label as StyledLabel } from "./Label.styles";

const Label = ({ id, name, htmlFor, children }) => (
  <StyledLabel {...{ id, name, htmlFor }}>{children}</StyledLabel>
);

Label.propTypes = {
  ...generalPropTypes,
  htmlFor: PropTypes.string
};

export default Label;
