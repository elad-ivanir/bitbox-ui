import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CheckBox from "../CheckBox";
import testIDs from "../../../../constants/tests/dataTestIDs";

describe("CheckBox rendering", () => {
  it("should render without crashing", () => {
    const container = document.createElement("div");

    ReactDOM.render(<CheckBox />, container);
  });

  it("should render with correct text in text label", () => {
    const { getByTestId } = render(
      <CheckBox name="test-checkbox" text="Test?" />
    );

    expect(getByTestId(testIDs.CheckBoxTextLabel)).toHaveTextContent("Test?");
  });

  it("should render in the shape of a square when invalid shape is recieved", () => {
    const { getByTestId } = render(<CheckBox shape="non-existing-shape" />);

    expect(getByTestId(testIDs.SquareCheckBoxIconUnchecked)).toBeTruthy();
  });

  it("should respond to click on checkbox itself", () => {
    const { getByTestId } = render(<CheckBox text="hello" />);
    const wrapperLabel = getByTestId(testIDs.CheckBoxWrapper);

    fireEvent.click(wrapperLabel);

    expect(getByTestId(testIDs.CheckBox)).toBeChecked();
  });

  it("should respond to clicking on corresponding label", () => {
    // TODO: decide what to do in case of id not supplied
    const { getByTestId } = render(<CheckBox id="some-id" text="some text" />);
    const textLabel = getByTestId(testIDs.CheckBoxTextLabel);

    fireEvent.click(textLabel);

    expect(getByTestId(testIDs.CheckBox)).toBeChecked();
  });
});
