import React from "react";

import Stud from "./stud";
import Hoop from "./hoop";
import Drop from "./drop";

export default function earrings(props: {
  style: string;
  color: string;
}): React.ReactElement | null {
  const { style, color } = props;
  switch (style) {
    case "stud":
      return <Stud color={color} />;
    case "hoop":
      return <Hoop color={color} />;
    case "drop":
      return <Drop color={color} />;
    case "none":
    default:
      return null;
  }
}
