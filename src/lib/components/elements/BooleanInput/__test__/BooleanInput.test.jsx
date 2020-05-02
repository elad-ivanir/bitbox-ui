import React from "react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SelectableInput from "../SelectableInput";

afterEach(cleanup);

describe("SelectableInput as CheckBox", () => {
  it("should render without crashing", () => {
    ReactDOM.render(<SelectableInput />, document.getElementById("root"));
  });
});
