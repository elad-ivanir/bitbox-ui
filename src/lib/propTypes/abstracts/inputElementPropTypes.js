import PropTypes from "prop-types";
import elementPropTypes from "./elementPropTypes";

export default {
  ...elementPropTypes,
  onChange: PropTypes.func
};
