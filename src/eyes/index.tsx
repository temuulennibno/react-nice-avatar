import React from "react";

import Circle from "./circle";
import Oval from "./oval";
import Smile from "./smile";
import Shadow from "./shadow";
import Wink from "./wink";

export default function eyes(props: { style: string }): React.ReactElement {
  const { style } = props;
  switch (style) {
    case "circle":
      return <Circle />;
    case "smile":
      return <Smile />;
    case "shadow":
      return <Shadow />;
    case "wink":
      return <Wink />;
    case "oval":
    default:
      return <Oval />;
  }
}
