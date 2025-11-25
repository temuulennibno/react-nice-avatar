import React from "react";

export default function hatCap(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: "35%",
        width: "55%",
        height: "80%",
        left: "19%",
      }}
      viewBox="0 0 200 160"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Cap body */}
      <path
        d="M20 100C20 100 25 50 100 40C175 50 180 100 180 100L180 110C180 115 175 120 170 120L30 120C25 120 20 115 20 110L20 100Z"
        fill={color}
        stroke="#171921"
        strokeWidth="3"
      />
      {/* Cap brim */}
      <path
        d="M15 115C15 115 10 125 60 135C110 145 200 130 200 120C200 110 190 115 180 115L20 115C15 115 15 115 15 115Z"
        fill={color}
        stroke="#171921"
        strokeWidth="2"
      />
      {/* Button on top */}
      <circle cx="100" cy="40" r="8" fill={color === "#000000" || color === "#000" ? "#333" : "#171921"} />
      {/* Cap panel lines */}
      <path
        d="M60 50C65 80 65 110 60 118"
        stroke="#171921"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M140 50C135 80 135 110 140 118"
        stroke="#171921"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}
