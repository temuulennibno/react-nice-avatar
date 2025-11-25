import React from "react";

export default function earringsStud(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        top: "28%",
        left: "0",
        width: "100%",
        height: "50%",
      }}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left ear stud */}
      <circle cx="22" cy="50" r="5" fill={color || "#FFD700"} stroke="#171921" strokeWidth="1" />
      {/* Right ear stud */}
      <circle cx="178" cy="50" r="5" fill={color || "#FFD700"} stroke="#171921" strokeWidth="1" />
    </svg>
  );
}
