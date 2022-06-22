/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

// color design
export const backgroundColor = '#1B1B3A';
export const backgroundColorBlock = '#282855'; // +9 brightness
export const backgroundColorSubtle = '#171732'; // -27 brightness

export const primaryColor = '#BDBDE0';
export const primaryColorHover = '#E9E9F4'; //+66 brightness
export const primaryColorDisabled = '#727287'; // desaturated + darker

export const accentColor = '#DB3E00';
export const accentColorHover = '#D6B0D6';

export const boringColor = '#4e4e4e';
export const boringColorBright = '#959595';

// Useful pre-made CSS
export const primaryLinkHoverCss = css`
   cursor: pointer;
   color: ${primaryColor};
   &:hover {
      color: ${primaryColorHover};
   }
`;

export const accentLinkHoverCss = css`
   cursor: pointer;
   font-weight: bold;
   color: ${primaryColor};
   &:hover {
      color: ${accentColor};
   }
`;

export const accentColorCss = css`
   color: ${accentColor};
`;

// standards
export const collapsedHeaderHeight = 70; // in pixels
