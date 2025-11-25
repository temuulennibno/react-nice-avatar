import React from "react";

import Long from "./long";
import Short from "./short";
import Round from "./round";
import Pointed from "./pointed";
import Button from "./button";

export default function nose(props: { style: string }): React.ReactElement {
  const { style } = props;
  switch (style) {
    case "long":
      return <Long />;
    case "round":
      return <Round />;
    case "pointed":
      return <Pointed />;
    case "button":
      return <Button />;
    case "short":
    default:
      return <Short />;
  }
}
