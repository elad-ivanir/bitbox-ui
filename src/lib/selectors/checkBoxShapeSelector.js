import selectInputShapes from "../constants/style/selectInputShapes";

export default (shapeName) =>
  selectInputShapes[shapeName] || selectInputShapes["square"];
