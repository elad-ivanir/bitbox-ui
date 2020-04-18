import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import booleanInputPropTypes from "../../../propTypes/booleanInputPropTypes";
import getIcons from "../../../selectors/checkBoxShapeSelector";
import withTheme from "../../../hoc/withTheme/withTheme";
import { CheckBoxView, TextLabel } from "./CheckBox.styles";
import testIDs from "../../../constants/tests/dataTestIDs";

const CheckBox = (props) => {
  let { UncheckedIcon, CheckedIcon } = getIcons(props.shape);

  return (
    <ThemeProvider theme={props.theme}>
      <CheckBoxView>
        <input
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          checked={props.value}
          disabled={props.isDisabled}
          type="checkbox"
          className="bui-checkbox--input"
          data-testid={testIDs.CheckBox}
        />
        <span className="bui-checkbox--icon-container">
          <CheckedIcon className="bui-checkbox--icon bui-checkbox--icon__checked" />
          <UncheckedIcon className="bui-checkbox--icon bui-checkbox--icon__unchecked" />
        </span>
        <TextLabel htmlFor={props.id}>{props.text}</TextLabel>
      </CheckBoxView>
    </ThemeProvider>
  );
};

CheckBox.propTypes = {
  ...booleanInputPropTypes,
  text: PropTypes.string,
  shape: PropTypes.string
};

export default withTheme(CheckBox);
