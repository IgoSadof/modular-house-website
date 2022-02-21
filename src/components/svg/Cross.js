import React from 'react';

export default function Cross({
  width = '32',
  height = '32',
  color = '#4f4f4f',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill='#4f4f4f'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='1.85791'
        y='0.443848'
        width='42'
        height='2'
        transform='rotate(45 1.85791 0.443848)'
        fill={color}
      />
      <rect
        x='0.443359'
        y='30.1416'
        width='42'
        height='2'
        transform='rotate(-45 0.443359 30.1416)'
        fill={color}
      />
    </svg>
  );
}
