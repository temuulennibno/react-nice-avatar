import React from "react";

export default function eyesShadow(): React.ReactElement {
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
      {/* Left eye with shadow */}
      <ellipse cx="16" cy="28" rx="10" ry="6" fill="#171921" opacity="0.3" />
      <ellipse cx="16" cy="30" rx="8" ry="12" fill="black" />
      {/* Right eye with shadow */}
      <ellipse cx="80" cy="18" rx="10" ry="6" fill="#171921" opacity="0.3" />
      <ellipse cx="80" cy="20" rx="8" ry="12" fill="black" />
    </svg>
  );
}
