import styled from "styled-components";
// TODO: turn into function and apply font family & other theme styles

export const WrapperLabel = styled.label`
  position: relative;

  .bui-checkbox--input {
    position: relative;
    z-index: -9999;
  }

  .bui-checkbox--view {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    display: block;
    border-radius: 4px;
    background: #dddddd;
    transition: background 200ms ease-in-out;
  }

  .bui-checkbox--input:checked + .bui-checkbox--view {
    background: red;
    transition: background 200ms;
  }
`;
