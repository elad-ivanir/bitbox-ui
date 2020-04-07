import React, { useContext } from "react";
import defaultTheme from "../../constants/defaults/defaultTheme";
import ThemeContext from "../../context/ThemeContext";

const withTheme = WrappedComponent => () => {
  let providedTheme = useContext(ThemeContext);
  return <WrappedComponent theme={{ ...defaultTheme, ...providedTheme }} />;
};

export default withTheme;
