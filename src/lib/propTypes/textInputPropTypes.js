import PropTypes from "prop-types";
import inputElementPropTypes from "./abstracts/inputElementPropTypes";

export default {
  ...inputElementPropTypes,
  value: PropTypes.string
};
