import PropTypes from "prop-types";
import selectInputPropTypes from "./abstracts/selectInputPropTypes";

export default {
  ...selectInputPropTypes,
  selectedValues: PropTypes.arrayOf(PropTypes.string)
};
