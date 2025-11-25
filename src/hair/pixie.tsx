import React from "react";

export default function hairPixie(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "22%",
        width: "90%",
        height: "75%",
        left: "2%",
      }}
      width="230"
      height="250"
      viewBox="0 0 230 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 150C35 120 40 80 70 50C100 20 140 15 170 25C200 35 220 65 215 110C212 140 205 160 205 160L40 150Z"
        fill={color || "#171921"}
        stroke="#171921"
        strokeWidth="3"
      />
      <path
        d="M60 70C55 55 70 35 95 30C120 25 135 35 140 50"
        stroke={color || "#171921"}
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M170 45C175 35 190 30 200 40C210 50 215 70 210 85"
        stroke={color || "#171921"}
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}
