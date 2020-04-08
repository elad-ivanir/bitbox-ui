import selectInputShapes from "../constants/style/selectInputShapes";

export default (shapeName) => {
  console.log(shapeName);

  return selectInputShapes[shapeName] || selectInputShapes["square"];
};
