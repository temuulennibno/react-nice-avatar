import React from "react";

import Laugh from "./laugh";
import Smile from "./smile";
import Peace from "./peace";
import Open from "./open";
import Serious from "./serious";
import Smirk from "./smirk";

export default function mouth(props: { style: string }): React.ReactElement {
  const { style } = props;
  switch (style) {
    case "laugh":
      return <Laugh />;
    case "smile":
      return <Smile />;
    case "open":
      return <Open />;
    case "serious":
      return <Serious />;
    case "smirk":
      return <Smirk />;
    case "peace":
    default:
      return <Peace />;
  }
}
