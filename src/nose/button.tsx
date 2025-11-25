import React from "react";

export default function noseButton(): React.ReactElement {
  return (
    <svg
      style={{
        width: "10%",
        height: "10%",
        position: "absolute",
        top: "16%",
        left: "45%",
      }}
      width="32"
      height="36"
      viewBox="0 0 32 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Small button nose */}
      <circle cx="16" cy="22" r="8" stroke="#171921" strokeWidth="3" fill="none" />
      <path d="M16 8L16 16" stroke="#171921" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
