import React from 'react';

export default function Facebook({ width = '8', height = '18' }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 8 18`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.8087 18H5.28696V8.928H7.72174L8 5.904H5.35652C5.35652 5.904 5.35652 4.752 5.35652 4.176C5.35652 3.456 5.49565 3.168 6.1913 3.168C6.74783 3.168 8.06957 3.168 8.06957 3.168V0C8.06957 0 6.05217 0 5.63478 0C2.9913 0 1.8087 1.152 1.8087 3.456C1.8087 5.472 1.8087 5.904 1.8087 5.904H0V9H1.8087V18Z'
        fill='#333333'
      />
    </svg>
  );
}
