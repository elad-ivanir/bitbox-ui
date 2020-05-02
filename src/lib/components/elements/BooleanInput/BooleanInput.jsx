import React from "react";
import PropTypes from "prop-types";
import { v4 as generateId } from "uuid";
import { ThemeProvider } from "styled-components";
import booleanInputPropTypes from "../../../propTypes/booleanInputPropTypes";
import getIcons from "../../../selectors/selectableShapeSelector";
import useTheme from "../../../hooks/useTheme";
import { BooleanInputView } from "./BooleanInput.styles";
import inputTypes from "./inputTypes";
import testIDs from "../../../constants/tests/dataTestIDs";
import Label from "../Label/Label";

const BooleanInput = ({
  id = generateId(),
  name,
  onChange,
  value,
  isDisabled,
  text,
  shape,
  type = "checkbox"
}) => {
  const theme = useTheme();
  let { UncheckedIcon, CheckedIcon } = getIcons(
    shape || inputTypes[type].defaultShape
  );

  return (
    <ThemeProvider theme={theme}>
      <BooleanInputView data-testid={testIDs.CheckBoxWrapper}>
        <input
          id={id}
          name={name}
          onChange={onChange}
          checked={value}
          disabled={isDisabled}
          type={type}
          className="bui-checkbox--input"
          data-testid={testIDs.CheckBox}
        />
        <span className="bui-checkbox--icon-container">
          {React.cloneElement(CheckedIcon, {
            className: "bui-checkbox--icon bui-checkbox--icon__checked"
          })}
          {React.cloneElement(UncheckedIcon, {
            className: "bui-checkbox--icon bui-checkbox--icon__unchecked"
          })}
        </span>
        <Label htmlFor={id} data-testid={testIDs.CheckBoxTextLabel}>
          {text}
        </Label>
      </BooleanInputView>
    </ThemeProvider>
  );
};

BooleanInput.propTypes = {
  ...booleanInputPropTypes,
  type: PropTypes.oneOf(Object.keys(inputTypes)),
  text: PropTypes.string,
  shape: PropTypes.string
};

export default BooleanInput;
