import React from "react";

export default function glassesCyber(): React.ReactElement {
  return (
    <svg
      style={{
        width: "105%",
        height: "18%",
        position: "absolute",
        top: "2%",
        left: "-5%",
      }}
      width="160"
      height="55"
      viewBox="0 0 160 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Single visor style lens */}
      <path
        d="M10 15C10 15 20 10 80 10C140 10 150 15 150 15L155 35C155 35 145 50 80 50C15 50 5 35 5 35L10 15Z"
        stroke="black"
        strokeWidth="3"
        fill="none"
      />
      {/* Lens shine */}
      <path
        d="M25 20C35 18 60 17 80 17"
        stroke="black"
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Left temple */}
      <path d="M10 20L2 25" stroke="black" strokeWidth="3" />
    </svg>
  );
}
