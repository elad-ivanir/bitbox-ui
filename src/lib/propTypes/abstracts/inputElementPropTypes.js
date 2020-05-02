import PropTypes from "prop-types";
import elementPropTypes from "./elementPropTypes";

export default {
  ...elementPropTypes,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func
};
