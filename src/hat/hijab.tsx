import React from "react";

export default function hatHijab(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: "12%",
        width: "75%",
        height: "100%",
        left: "10%",
      }}
      viewBox="0 0 220 320"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Main hijab shape */}
      <path
        d="M30 180C30 180 20 100 50 60C80 20 110 15 115 15C120 15 155 20 180 60C205 100 195 180 195 180"
        fill={color}
        stroke="#171921"
        strokeWidth="3"
      />
      {/* Left draping */}
      <path
        d="M30 180C25 220 20 260 30 300C35 320 45 330 45 330"
        fill={color}
        stroke="#171921"
        strokeWidth="3"
      />
      {/* Right draping */}
      <path
        d="M195 180C200 220 205 260 195 300C190 320 180 330 180 330"
        fill={color}
        stroke="#171921"
        strokeWidth="3"
      />
      {/* Front drape connecting */}
      <path
        d="M30 180C30 200 45 220 110 220C175 220 195 200 195 180"
        fill={color}
        stroke="#171921"
        strokeWidth="2"
      />
      {/* Inner edge around face */}
      <path
        d="M50 170C50 120 70 80 110 75C150 80 175 120 175 170"
        stroke="#171921"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
