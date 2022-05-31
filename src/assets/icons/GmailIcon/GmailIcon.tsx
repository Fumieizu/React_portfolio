import React from 'react';
import { ISVGIcon } from '../model';
import { theme } from '../../../commons/theme';

export const GmailIcon: React.FC<ISVGIcon> = ({
  width = '25px',
  height = '25px',
  color = theme.colors.shadowLightBlue,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 56.7 56.7" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="m53.172 14.595.001-.001h-.001v-1.183a4.097 4.097 0 0 0-4.085-4.085h-.002l-.002.002.004-.002H7.397l.016.013-.016-.012a4.097 4.097 0 0 0-4.086 4.085v27.907a4.097 4.097 0 0 0 4.086 4.085h40.112v-.001c4.285-.05 5.572-1.11 5.67-4.08l-.007-26.728zm-7.129-4.27L28.175 23.488 10.424 10.325h35.619zM9.861 20.553l16.551 11.4.017.011L9.852 43.49l.01-22.939zm.428 23.852 17.015-11.831.298.207a1 1 0 0 0 .571.18c.199 0 .878-.39.878-.39l17.02 11.833H10.289zm36.209-.921L29.93 31.963l16.567-11.411v22.93z"
      />
    </svg>
  );
};
