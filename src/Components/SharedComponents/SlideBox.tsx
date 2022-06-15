/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

// This components whole jobs is to slide up and fade in once "isVisible" is true
// It accomplishes this by having a wrapper around the children with bottom
// and top padding which adjusts on the fly. We adjust it on both ends and use
// padding instead of margin to guarantee the page doesn't shift in any way.

interface IProps {
   children: JSX.Element | JSX.Element[];
   isVisible: boolean;
   slideInLength: number;
   slideInLengthMobile: number;
   duration?: number;
}

function SlideBox({ children, isVisible, slideInLength, slideInLengthMobile, duration = 1 }: IProps) {
   const base = css`
      transition-property: padding-top, padding-bottom, opacity;
      transition-duration: ${duration}s;

      padding-top: ${isVisible ? 0 : slideInLength}px;
      padding-bottom: ${isVisible ? slideInLength : 0}px;
      opacity: ${isVisible ? 1 : 0};

      @media (max-width: 768px) {
         padding-top: ${isVisible ? 0 : slideInLengthMobile}px;
         padding-bottom: ${isVisible ? slideInLengthMobile : 0}px;
      }
   `;

   return <div css={base}>{children}</div>;
}

export default SlideBox;
