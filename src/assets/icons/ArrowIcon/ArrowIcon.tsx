import React from 'react';
import { ISVGIcon } from '../model';

export const ArrowIcon: React.FC<ISVGIcon> = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M10.1 23a1 1 0 0 0 0-1.4L5.5 17h23.6a1 1 0 0 0 0-2H5.4l4.6-4.6A1 1 0 0 0 8.7 9l-6.4 6.4a.9.9 0 0 0 0 1.2L8.7 23a1 1 0 0 0 1.4 0Z"
        data-name="Layer 2"
      />
    </svg>
  );
};
