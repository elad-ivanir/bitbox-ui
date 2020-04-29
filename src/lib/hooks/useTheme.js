import { useContext } from "react";
import { defaultsDeep } from "lodash";
import themeContext from "../context/ThemeContext";
import defaultTheme from "../constants/defaults/defaultTheme";

export default () => {
  let providedTheme = useContext(themeContext);
  return defaultsDeep(providedTheme, defaultTheme);
};
