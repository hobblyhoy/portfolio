/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export const backgroundColor = '#1B1B3A';
export const backgroundColorBlock = '#282855'; // +9 brightness
export const backgroundColorSubtle = '#171732'; // -27 brightness

export const primaryColor = '#BDBDE0';
export const primaryColorHover = '#E9E9F4'; //+66 brightness

export const accentColor = '#DB3E00';
export const accentColorHover = '#D6B0D6';

export const boringColor = '#4e4e4e';

export const primaryLinkHover = css`
   cursor: pointer;
   color: ${primaryColor};
   &:hover {
      color: ${primaryColorHover};
   }
`;

export const accentLinkHover = css`
   cursor: pointer;
   font-weight: bold;
   color: ${primaryColor};
   &:hover {
      color: ${accentColor};
   }
`;

export const easeProgress = (start: number, progressFactor: number): number => {
   if (progressFactor > 1) throw 'Cannot have progress beyond 100%';

   // Keeping these experimental ones around in case I change my mind again
   // equations are based on a cartesian graph charting time on x and distance traveled on y
   //return Math.floor(start - (start * progressFactor)); //Linear
   //return Math.floor(start - (start * Math.cbrt(progressFactor))); //Cubic root
   //return Math.floor(start - (start * Math.pow(progressFactor, 0.25))); //Quad root

   return Math.floor(start - start * Math.sqrt(1 - Math.pow(progressFactor - 1, 2))); //Circle quadrant 2
};

export const collapsedHeaderHeight = 70;