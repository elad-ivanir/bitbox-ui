import React from "react";
import { FaDotCircle, FaSquare, FaCheckSquare, FaCircle } from "react-icons/fa";
import dataTestIDs from "../tests/dataTestIDs";

export const checkboxShapes = {
  square: {
    UncheckedIcon: (
      <FaSquare data-testid={dataTestIDs.SquareCheckBoxIconUnchecked} />
    ),
    CheckedIcon: (
      <FaCheckSquare data-testid={dataTestIDs.SquareCheckBoxIconCheckeds} />
    )
  },
  circle: {
    UncheckedIcon: (
      <FaCircle data-testid={dataTestIDs.CircleCheckBoxIconUnchecked} />
    ),
    CheckedIcon: (
      <FaDotCircle data-testid={dataTestIDs.CircleCheckBoxIconChecked} />
    )
  }
};
