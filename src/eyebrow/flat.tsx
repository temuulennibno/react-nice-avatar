import React from "react";

export default function eyebrowFlat(): React.ReactElement {
  return (
    <svg
      style={{
        position: "absolute",
        width: "80%",
        height: "13%",
        top: 0,
      }}
      width="149"
      height="48"
      viewBox="0 0 149 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left eyebrow - flat */}
      <path
        d="M20 28L50 26"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Right eyebrow - flat */}
      <path
        d="M99 18L129 16"
        stroke="black"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
