import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./lib/components/contextProviders/ThemeProvider/ThemeProvider";
import CheckBox from "./lib/components/elements/CheckBox/CheckBox";

const theme = {
  colors: {
    main: "red"
  },
  typography: {
    fontFamily: "Hack"
  }
};

const jsx = (
  <ThemeProvider theme={theme}>
    <CheckBox text="hello" />
  </ThemeProvider>
);

ReactDOM.render(jsx, document.getElementById("root"));
