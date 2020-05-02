import styled from "styled-components";
import { lightGrey, grey } from "../../../constants/style/colors";

export const BooleanInputView = styled.label`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => props.theme.margins.small};

  &:hover,
  & *:hover {
    cursor: pointer;
  }

  .bui-checkbox--input {
    display: none;
  }

  .bui-checkbox--icon-container {
    width: ${(props) => props.theme.sizing.CheckBox};
    height: ${(props) => props.theme.sizing.CheckBox};
    display: inline-block;
    position: relative;

    .bui-checkbox--icon {
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    .bui-checkbox--icon__checked {
      font-size: 0;
      color: ${(props) => props.theme.colors.main};
      transition: all 200ms ease-in-out;
    }

    .bui-checkbox--icon__unchecked {
      font-size: ${(props) => props.theme.sizing.CheckBox};
      color: ${lightGrey};
      transition: all 200ms ease-in-out;

      &:hover {
        color: ${grey};
      }
    }
  }

  .bui-checkbox--input:checked ~ .bui-checkbox--icon-container {
    .bui-checkbox--icon__checked {
      font-size: ${(props) => props.theme.sizing.CheckBox};
    }

    .bui-checkbox--icon__unchecked {
      font-size: 0;
    }
  }
`;
