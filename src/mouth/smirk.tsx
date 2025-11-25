import React from "react";

export default function mouthSmirk(): React.ReactElement {
  return (
    <svg
      style={{
        width: "50%",
        height: "17%",
        position: "absolute",
        top: "25%",
        right: "22%",
      }}
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Asymmetric smirk */}
      <path
        d="M15 30C20 28 30 27 35 28C40 29 50 35 52 32"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
