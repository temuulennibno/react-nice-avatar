import React from "react";

import Beanie from "./beanie";
import Cap from "./cap";
import Cowboy from "./cowboy";
import Headband from "./headband";
import Hijab from "./hijab";
import Fedora from "./fedora";

export default function hat(props: {
  color: string;
  style: string;
}): React.ReactElement | null {
  const { style, color } = props;
  switch (style) {
    case "beanie":
      return <Beanie color={color} />;
    case "cap":
      return <Cap color={color} />;
    case "cowboy":
      return <Cowboy color={color} />;
    case "headband":
      return <Headband color={color} />;
    case "hijab":
      return <Hijab color={color} />;
    case "fedora":
      return <Fedora color={color} />;
    case "none":
    default:
      return null;
  }
}
