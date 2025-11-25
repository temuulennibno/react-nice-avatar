import React from "react";
import chroma from "chroma-js";

import Hoody from "./hoody";
import Short from "./short";
import Polo from "./polo";
import Vneck from "./vneck";
import Crew from "./crew";

export default function shirt(props: {
  color: string;
  style: string;
}): React.ReactElement {
  const { style, color } = props;
  const secondColor = chroma(color).brighten(1).hex();
  switch (style) {
    case "hoody":
      return <Hoody color={color} lightColor={secondColor} />;
    case "polo":
      return <Polo color={color} lightColor={secondColor} />;
    case "vneck":
      return <Vneck color={color} lightColor={secondColor} />;
    case "crew":
      return <Crew color={color} lightColor={secondColor} />;
    case "short":
    default:
      return <Short color={color} />;
  }
}
