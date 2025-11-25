import React from "react";

export default function earringsDrop(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        top: "25%",
        left: "0",
        width: "100%",
        height: "70%",
      }}
      viewBox="0 0 200 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left ear drop */}
      <circle cx="20" cy="50" r="4" fill={color || "#FFD700"} stroke="#171921" strokeWidth="1" />
      <line x1="20" y1="54" x2="20" y2="75" stroke={color || "#FFD700"} strokeWidth="2" />
      <path
        d="M12 75C12 75 15 95 20 95C25 95 28 75 28 75"
        fill={color || "#FFD700"}
        stroke="#171921"
        strokeWidth="1"
      />

      {/* Right ear drop */}
      <circle cx="180" cy="50" r="4" fill={color || "#FFD700"} stroke="#171921" strokeWidth="1" />
      <line x1="180" y1="54" x2="180" y2="75" stroke={color || "#FFD700"} strokeWidth="2" />
      <path
        d="M172 75C172 75 175 95 180 95C185 95 188 75 188 75"
        fill={color || "#FFD700"}
        stroke="#171921"
        strokeWidth="1"
      />
    </svg>
  );
}
