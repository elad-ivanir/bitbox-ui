import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import booleanInputPropTypes from "../../../propTypes/booleanInputPropTypes";
import getIcons from "../../../selectors/checkBoxShapeSelector";
import withTheme from "../../../hoc/withTheme/withTheme";
import { WrapperLabel } from "./CheckBox.styles";

// is it worth renaming value to isChecked?
const CheckBox = (props) => {
  console.log(props);

  let { UncheckedIcon, CheckedIcon } = getIcons(props.shape);
  return (
    <ThemeProvider theme={props.theme}>
      <WrapperLabel>
        <input
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          checked={props.value}
          disabled={props.isDisabled}
          type="checkbox"
          className="bui-checkbox--input"
        />
        <CheckedIcon className="bui-checkbox--icon bui-checkbox--icon__checked" />
        <UncheckedIcon className="bui-checkbox--icon bui-checkbox--icon__unchecked" />
      </WrapperLabel>
    </ThemeProvider>
  );
};

CheckBox.propTypes = {
  ...booleanInputPropTypes,
  text: PropTypes.string,
  shape: PropTypes.string,
};

export default withTheme(CheckBox);
