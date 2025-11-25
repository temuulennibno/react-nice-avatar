import React from "react";

import Normal from "./normal";
import Thick from "./thick";
import Mohawk from "./mohawk";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";
import Curly from "./curly";
import Bald from "./bald";
import Afro from "./afro";
import Pixie from "./pixie";
import Buzz from "./buzz";
import Braids from "./braids";
import LongCurly from "./longCurly";

export default function hair(props: {
  style: string;
  color: string;
  colorRandom: boolean;
}): React.ReactElement | null {
  const { style, color, colorRandom } = props;
  switch (style) {
    case "thick":
      return <Thick color={color} colorRandom={colorRandom} />;
    case "mohawk":
      return <Mohawk color={color} colorRandom={colorRandom} />;
    case "womanLong":
      return <WomanLong color={color} />;
    case "womanShort":
      return <WomanShort color={color} />;
    case "curly":
      return <Curly color={color} />;
    case "bald":
      return <Bald color={color} />;
    case "afro":
      return <Afro color={color} />;
    case "pixie":
      return <Pixie color={color} />;
    case "buzz":
      return <Buzz color={color} />;
    case "braids":
      return <Braids color={color} />;
    case "longCurly":
      return <LongCurly color={color} />;
    case "normal":
    default:
      return <Normal color={color} />;
  }
}
