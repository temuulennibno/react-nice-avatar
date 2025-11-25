import React from "react";

export default function earringsHoop(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        top: "25%",
        left: "0",
        width: "100%",
        height: "60%",
      }}
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left ear hoop */}
      <circle
        cx="20"
        cy="55"
        r="15"
        fill="none"
        stroke={color || "#FFD700"}
        strokeWidth="3"
      />
      {/* Right ear hoop */}
      <circle
        cx="180"
        cy="55"
        r="15"
        fill="none"
        stroke={color || "#FFD700"}
        strokeWidth="3"
      />
    </svg>
  );
}
