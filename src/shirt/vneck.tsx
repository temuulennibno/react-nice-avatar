import React from "react";

export default function shirtVneck(props: {
  color: string;
  lightColor: string;
}): React.ReactElement {
  const { color } = props;
  return (
    <svg
      style={{
        position: "absolute",
        bottom: "-2%",
        width: "98%",
        height: "26%",
        left: "-0.2%",
      }}
      width="281"
      height="93"
      viewBox="0 0 281 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main shirt body */}
      <path
        d="M3 91H277C277 91 260 45 235 35C210 25 180 30 140 55C100 30 70 25 45 35C20 45 3 91 3 91Z"
        fill={color}
        stroke="black"
        strokeWidth="4"
      />
      {/* V-neck */}
      <path
        d="M105 35C115 45 130 60 140 70C150 60 165 45 175 35"
        stroke="black"
        strokeWidth="4"
        fill="none"
      />
      {/* Collar lines */}
      <path d="M105 35L90 25" stroke="black" strokeWidth="3" />
      <path d="M175 35L190 25" stroke="black" strokeWidth="3" />
    </svg>
  );
}
