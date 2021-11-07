import React from "react";

export default function Burger({ width = "42", height = "42"}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="11" y="13" width="20" height="1" fill="white" />
      <rect x="11" y="20" width="20" height="1" fill="white" />
      <rect x="11" y="27" width="20" height="1" fill="white" />
      <rect x="0.5" y="0.5" width="41" height="41" stroke="#CDA173" />
    </svg>
  );
}
