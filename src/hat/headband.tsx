import React from "react";

export default function hatHeadband(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: "40%",
        width: "50%",
        height: "70%",
        left: "22%",
      }}
      viewBox="0 0 180 120"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Headband */}
      <path
        d="M10 85C10 85 30 40 90 35C150 40 170 85 170 85"
        stroke={color}
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />
      {/* Headband outline */}
      <path
        d="M10 85C10 85 30 40 90 35C150 40 170 85 170 85"
        stroke="#171921"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Decorative pattern */}
      <circle cx="50" cy="55" r="4" fill="#fff" opacity="0.5" />
      <circle cx="90" cy="45" r="4" fill="#fff" opacity="0.5" />
      <circle cx="130" cy="55" r="4" fill="#fff" opacity="0.5" />
    </svg>
  );
}
