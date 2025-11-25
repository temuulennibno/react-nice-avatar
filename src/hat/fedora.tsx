import React from "react";

export default function hatFedora(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: "33%",
        width: "60%",
        height: "85%",
        left: "17%",
      }}
      viewBox="0 0 200 150"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Brim */}
      <ellipse
        cx="100"
        cy="120"
        rx="95"
        ry="20"
        fill={color}
        stroke="#171921"
        strokeWidth="3"
      />
      {/* Crown */}
      <path
        d="M30 120C30 120 35 70 50 50C65 30 85 25 100 25C115 25 135 30 150 50C165 70 170 120 170 120"
        fill={color}
        stroke="#171921"
        strokeWidth="3"
      />
      {/* Pinched top indent */}
      <path
        d="M55 45C65 55 85 60 100 60C115 60 135 55 145 45"
        stroke="#171921"
        strokeWidth="2"
        fill="none"
      />
      {/* Hat band */}
      <path
        d="M35 100C35 100 65 95 100 95C135 95 165 100 165 100"
        stroke={color === "#000000" || color === "#000" ? "#4A4A4A" : "#171921"}
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Band decoration */}
      <path
        d="M155 100L160 85L165 100"
        fill={color === "#000000" || color === "#000" ? "#4A4A4A" : "#171921"}
        stroke="#171921"
        strokeWidth="1"
      />
    </svg>
  );
}
