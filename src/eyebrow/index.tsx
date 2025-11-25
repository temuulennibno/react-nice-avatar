import React from "react";

import Up from "./up";
import UpWoman from "./upWoman";
import Flat from "./flat";
import Angry from "./angry";

export default function eyebrow(props: { style: string }): React.ReactElement {
  const { style } = props;
  switch (style) {
    case "upWoman":
      return <UpWoman />;
    case "flat":
      return <Flat />;
    case "angry":
      return <Angry />;
    case "up":
    default:
      return <Up />;
  }
}
