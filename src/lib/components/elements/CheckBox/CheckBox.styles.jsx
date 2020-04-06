import styled from "styled-components";
import {
  darkGrey,
  grey,
  lightGrey,
  white
} from "../../../constants/style/colors";
/*
  TODO: (when theme provider is merged):
  * Use styled-components' ThemeProvider API in order to pass theme properties to CheckBox
*/

export const StyledWrapper = styled.label`
  position: relative;

  .bui-checkbox--input {
    position: relative;
    z-index: -9999;
  }

  .bui-checkbox--view {
    width: 18px;
    height: 18px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${lightGrey};
    box-sizing: border-box;
    border: 2px ${darkGrey} solid;
    border-radius: 3px;
    transition: all 200ms ease-in-out;
  }

  .bui-checkbox--view:hover {
    box-shadow: 0.15px 0.15px 7px ${grey};
  }

  .bui-checkbox--input:checked + .bui-checkbox--view {
    background: #ff4d4d;
    border: none;
    transition: all 200ms ease-in-out;
  }

  .bui-checkbox--view--icon {
    color: ${white};
    opacity: 0;
  }

  .bui-checkbox--input:checked
    + .bui-checkbox--view
    > .bui-checkbox--view--icon {
    opacity: 1;
  }
`;
