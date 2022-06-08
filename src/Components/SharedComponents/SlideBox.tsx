/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

// This components whole jobs is to slide up and fade in once "isVisible" is true
// It accomplishes this by having a wrapper around the children with bottom
// and top padding which adjusts on the fly. We adjust it on both ends to avoid
// shifting the page in any way 

interface IProps {
   children: JSX.Element;
   isVisible: boolean;
   slideInLength: number;
}

function SlideBox({ children, isVisible, slideInLength}: IProps) {

   const base = css`
      transition-property: padding-top, padding-bottom, opacity;
      transition-duration: 1s;

      padding-top: ${isVisible ? 0 : slideInLength};
      padding-bottom: ${isVisible ? slideInLength : 0};
      opacity: ${isVisible ? 1 : 0};
   `;

   return <div css={base}>
      {children}
   </div>
}

export default SlideBox;