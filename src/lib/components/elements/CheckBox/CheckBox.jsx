import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import booleanInputPropTypes from "../../../propTypes/booleanInputPropTypes";
import getIcons from "../../../selectors/checkBoxShapeSelector";
import useTheme from "../../../hooks/useTheme";
import { CheckBoxView, TextLabel } from "./CheckBox.styles";
import testIDs from "../../../constants/tests/dataTestIDs";

const CheckBox = ({ id, name, onChange, value, isDisabled, text, shape }) => {
  const theme = useTheme();
  let { UncheckedIcon, CheckedIcon } = getIcons(shape);

  return (
    <ThemeProvider theme={theme}>
      <CheckBoxView>
        <input
          id={id}
          name={name}
          onChange={onChange}
          checked={value}
          disabled={isDisabled}
          type="checkbox"
          className="bui-checkbox--input"
          data-testid={testIDs.CheckBox}
        />
        <span className="bui-checkbox--icon-container">
          <CheckedIcon className="bui-checkbox--icon bui-checkbox--icon__checked" />
          <UncheckedIcon className="bui-checkbox--icon bui-checkbox--icon__unchecked" />
        </span>
        <TextLabel htmlFor={id}>{text}</TextLabel>
      </CheckBoxView>
    </ThemeProvider>
  );
};

CheckBox.propTypes = {
  ...booleanInputPropTypes,
  text: PropTypes.string,
  shape: PropTypes.string
};

export default CheckBox;
