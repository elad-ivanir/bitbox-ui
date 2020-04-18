import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CheckBox from "../CheckBox";
import testIDs from "../../../../constants/tests/dataTestIDs";

it("renders without crashing", () => {
  const container = document.createElement("div");

  ReactDOM.render(<CheckBox />, container);
});

it("renders checkbox correctly", () => {
  const { getByTestId } = render(
    <CheckBox name="test-checkbox" text="Test?" />
  );

  expect(getByTestId(testIDs.CheckBox));
});
