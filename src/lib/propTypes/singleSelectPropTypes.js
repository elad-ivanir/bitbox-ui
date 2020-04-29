import PropTypes from "prop-types";
import selectInputPropTypes from "./abstracts/selectInputPropTypes";

export default {
  ...selectInputPropTypes,
  value: PropTypes.array
};
