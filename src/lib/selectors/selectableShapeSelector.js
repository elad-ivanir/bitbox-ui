import { checkboxShapes } from "../constants/style/shapes";

export default (shapeName) =>
  checkboxShapes[shapeName] || checkboxShapes["square"];
