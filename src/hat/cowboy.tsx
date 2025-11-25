import React from "react";

export default function hatCowboy(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: "32%",
        width: "70%",
        height: "90%",
        left: "12%",
      }}
      viewBox="0 0 240 180"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Wide brim */}
      <ellipse
        cx="120"
        cy="140"
        rx="115"
        ry="25"
        fill={color}
        stroke="#171921"
        strokeWidth="3"
      />
      {/* Crown of hat */}
      <path
        d="M55 140C55 140 50 100 60 70C70 40 90 30 120 30C150 30 170 40 180 70C190 100 185 140 185 140"
        fill={color}
        stroke="#171921"
        strokeWidth="3"
      />
      {/* Indent at top */}
      <path
        d="M75 50C85 65 105 70 120 70C135 70 155 65 165 50"
        stroke="#171921"
        strokeWidth="2"
        fill="none"
      />
      {/* Hat band */}
      <path
        d="M60 115C60 115 90 110 120 110C150 110 180 115 180 115"
        stroke={color === "#000000" || color === "#000" ? "#8B4513" : "#171921"}
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Band buckle */}
      <rect x="112" y="107" width="16" height="16" rx="2" fill="#FFD700" stroke="#171921" strokeWidth="1" />
    </svg>
  );
}
