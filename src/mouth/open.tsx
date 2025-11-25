import React from "react";

export default function mouthOpen(): React.ReactElement {
  return (
    <svg
      style={{
        width: "50%",
        height: "20%",
        position: "absolute",
        top: "23%",
        right: "23%",
      }}
      width="64"
      height="70"
      viewBox="0 0 64 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Open mouth */}
      <ellipse cx="32" cy="35" rx="20" ry="18" fill="#171921" />
      {/* Teeth */}
      <path
        d="M18 28C22 26 28 25 32 25C36 25 42 26 46 28"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Tongue hint */}
      <ellipse cx="32" cy="45" rx="10" ry="6" fill="#D35D6E" />
    </svg>
  );
}
