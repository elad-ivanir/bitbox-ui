import React from "react";
import PropTypes from "prop-types";
import ThemeContext from "../../../context/ThemeContext";

const ThemeProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

ThemeProvider.propTypes = {
  ThemeContext: PropTypes.func // TODO: verify type
};

export default ThemeProvider;
