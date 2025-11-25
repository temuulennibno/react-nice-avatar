import React from "react";

export default function hairBuzz(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "22%",
        width: "88%",
        height: "78%",
        left: "3%",
      }}
      width="220"
      height="260"
      viewBox="0 0 220 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 145C25 145 22 95 50 60C78 25 110 20 130 20C150 20 182 30 200 65C218 100 210 145 210 145"
        fill={color || "#171921"}
        stroke="#171921"
        strokeWidth="2"
        opacity="0.7"
      />
      <defs>
        <pattern id="buzzPattern" patternUnits="userSpaceOnUse" width="6" height="6">
          <circle cx="2" cy="2" r="1" fill={color || "#171921"} opacity="0.4" />
        </pattern>
      </defs>
      <path
        d="M30 140C30 140 27 95 55 62C83 29 112 24 130 24C148 24 178 33 195 67C212 101 205 140 205 140"
        fill="url(#buzzPattern)"
      />
    </svg>
  );
}
