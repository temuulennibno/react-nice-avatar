import React from "react";

export default function shirtCrew(props: {
  color: string;
  lightColor: string;
}): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "-2%",
        width: "98%",
        height: "26%",
        left: "-0.2%",
      }}
      width="281"
      height="93"
      viewBox="0 0 281 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main shirt body */}
      <path
        d="M3 91H277C277 91 260 50 230 38C200 26 170 32 140 40C110 32 80 26 50 38C20 50 3 91 3 91Z"
        fill={color}
        stroke="black"
        strokeWidth="4"
      />
      {/* Crew neck collar */}
      <path
        d="M110 40C120 35 130 33 140 33C150 33 160 35 170 40"
        stroke="black"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner collar detail */}
      <path
        d="M115 43C125 39 132 38 140 38C148 38 155 39 165 43"
        stroke="black"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
