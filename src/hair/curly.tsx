import React from "react";

export default function hairCurly(props: { color: string }): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "20%",
        width: "94%",
        height: "81%",
        left: "-0.5%",
      }}
      width="240"
      height="270"
      viewBox="0 0 240 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 140C30 140 25 100 45 70C65 40 95 25 130 25C165 25 195 45 210 75C225 105 220 140 220 140"
        fill={color || "#171921"}
        stroke="#171921"
        strokeWidth="3"
      />
      <circle cx="45" cy="85" r="18" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="70" cy="55" r="16" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="100" cy="35" r="17" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="135" cy="30" r="18" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="165" cy="40" r="16" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="190" cy="60" r="17" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="205" cy="90" r="15" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="55" cy="110" r="14" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="35" cy="130" r="12" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="210" cy="120" r="13" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="60" cy="45" r="12" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
      <circle cx="180" cy="50" r="14" fill={color || "#171921"} stroke="#171921" strokeWidth="2" />
    </svg>
  );
}
