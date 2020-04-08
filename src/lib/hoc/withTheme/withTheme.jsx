import React, { useContext } from "react";
import defaultTheme from "../../constants/defaults/defaultTheme";
import ThemeContext from "../../context/ThemeContext";

const withTheme = (WrappedComponent) => (props) => {
  let providedTheme = useContext(ThemeContext);
  return (
    <WrappedComponent
      theme={{ ...defaultTheme, ...providedTheme }}
      {...props}
    />
  );
};

export default withTheme;
