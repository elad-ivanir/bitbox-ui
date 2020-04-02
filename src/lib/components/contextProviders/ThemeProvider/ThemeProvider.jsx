import React from "react";

const ThemeProvider = ({ theme: ThemeContext, children }) => {
  <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
