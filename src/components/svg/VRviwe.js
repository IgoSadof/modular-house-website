import React from 'react';

export default function VRviwe({ width = '100%', height = '100%' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 26 26`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19 1H21C23.2091 1 25 2.79086 25 5V7M7 1H5C2.79086 1 1 2.79086 1 5V7M25 19V21C25 23.2091 23.2091 25 21 25H19M7 25H5C2.79086 25 1 23.2091 1 21V19'
        stroke='#4F4F4F'
        strokeWidth='2'
      />
      <rect
        x='8'
        y='8'
        width='10'
        height='10'
        rx='5'
        stroke='#4F4F4F'
        strokeWidth='2'
      />
    </svg>
  );
}
