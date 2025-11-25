import React from "react";

export default function hairAfro(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "15%",
        width: "110%",
        height: "95%",
        left: "-8%",
      }}
      width="280"
      height="320"
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="140" cy="120" rx="120" ry="110" fill={color || "#171921"} stroke="#171921" strokeWidth="3" />
      <circle cx="50" cy="100" r="25" fill={color || "#171921"} />
      <circle cx="230" cy="100" r="25" fill={color || "#171921"} />
      <circle cx="35" cy="140" r="22" fill={color || "#171921"} />
      <circle cx="245" cy="140" r="22" fill={color || "#171921"} />
      <circle cx="60" cy="60" r="20" fill={color || "#171921"} />
      <circle cx="220" cy="60" r="20" fill={color || "#171921"} />
      <circle cx="100" cy="30" r="22" fill={color || "#171921"} />
      <circle cx="180" cy="30" r="22" fill={color || "#171921"} />
      <circle cx="140" cy="20" r="24" fill={color || "#171921"} />
      <circle cx="30" cy="180" r="18" fill={color || "#171921"} />
      <circle cx="250" cy="180" r="18" fill={color || "#171921"} />
    </svg>
  );
}
