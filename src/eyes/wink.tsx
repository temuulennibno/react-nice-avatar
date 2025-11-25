import React from "react";

export default function eyesWink(): React.ReactElement {
  return (
    <svg
      style={{
        width: "100%",
        height: "12%",
        position: "absolute",
        top: "6%",
      }}
      width="96"
      height="48"
      viewBox="0 0 96 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left eye - open */}
      <ellipse
        cx="16.5"
        cy="29"
        rx="9"
        ry="13.5"
        transform="rotate(-6.77646 16.5 29)"
        fill="black"
      />
      {/* Right eye - winking */}
      <path
        d="M72 20C75 17 80 17 85 20"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
