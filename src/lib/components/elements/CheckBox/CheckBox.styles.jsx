import styled from "styled-components";
import {
  darkGrey,
  grey,
  lightGrey,
  white,
} from "../../../constants/style/colors";

export const WrapperLabel = styled.label`
  width: 18px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .bui-checkbox--input {
    position: relative;
    display: none;
  }

  .bui-checkbox--icon {
    position: absolute;
    top: 0;
    display: block;
  }

  .bui-checkbox--icon:hover {
    cursor: pointer;
  }

  .bui-checkbox--icon__unchecked {
    font-size: 18px;
  }

  .bui-checkbox--icon__checked {
    font-size: 0;
    transition: all 200ms ease-in-out;
  }

  .bui-checkbox--input:checked + .bui-checkbox--icon__checked {
    font-size: 18px;
    transition: all 200ms ease-in-out;
  }
`;
