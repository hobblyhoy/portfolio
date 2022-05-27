/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { backgroundColorBlock } from '../utils';

function ScrollIndicator() {
   const [isVisible, setIsVisible] = useState(true);

   useEffect(() => {
      const onScroll = (event: Event) => {
         setIsVisible(false);
         window.removeEventListener('scroll', onScroll);
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   });

   // #region css
   const base = css`
      position: fixed;
      bottom: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      opacity: ${isVisible ? 1 : 0};
      transition: opacity 1s;
   `;

   const indicatorCss = css`
      display: flex;
      flex-direction: column;
      background-color: ${backgroundColorBlock};
      padding-top: 20px;
      padding-bottom: 40px;
      padding-left: 80px;
      padding-right: 80px;
      border-radius: 5px;
      font-size: 32px;
      @media (max-width: 768px) {
         padding-top: 10px;
         padding-bottom: 20px;
         padding-left: 40px;
         padding-right: 40px;
         font-size: 20px;
      }
   `;

   const keyframesHelper = keyframes`
      0%, 100% {
         transform: translateY(0);
      }
      50% {
         transform: translateY(10px);
      }
   `;

   const chevronCss = css`
      animation: ${keyframesHelper} 2s ease infinite;
   `;
   // #endregion

   return (
      <div css={base} aria-hidden="true">
         <div css={indicatorCss}>
            <span>Scroll</span>
            <FontAwesomeIcon icon={faChevronDown} css={chevronCss} />
         </div>
      </div>
   );
}

export default ScrollIndicator;
