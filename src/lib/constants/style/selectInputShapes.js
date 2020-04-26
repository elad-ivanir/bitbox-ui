import React from "react";
import {
  FaDotCircle,
  FaRegSquare,
  FaCheckSquare,
  FaRegCircle
} from "react-icons/fa";
import dataTestIDs from "../tests/dataTestIDs";

export default {
  square: {
    UncheckedIcon: (
      <FaRegSquare data-testid={dataTestIDs.SquareCheckBoxIconUnchecked} />
    ),
    CheckedIcon: (
      <FaCheckSquare data-testid={dataTestIDs.SquareCheckBoxIconCheckeds} />
    )
  },
  circle: {
    UncheckedIcon: (
      <FaRegCircle data-testid={dataTestIDs.CircleCheckBoxIconUnchecked} />
    ),
    CheckedIcon: (
      <FaDotCircle data-testid={dataTestIDs.CircleCheckBoxIconChecked} />
    )
  }
};
