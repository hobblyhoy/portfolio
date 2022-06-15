/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { backgroundColorBlock } from '../../store';

function ScrollIndicator() {
   const [opacity, setOpacity] = useState(1);
   const [isRendered, setIsRendered] = useState(true);
   const animationDuration = 1; // in seconds

   // Trigger the fade out and removal of event listeners
   useEffect(() => {
      const onScroll = (event: Event) => {
         setOpacity(0);
         window.removeEventListener('scroll', onScroll);
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   });

   // Trigger the removal from the page so we dont block interactable elements
   useEffect(() => {
      if (!opacity) {
         setTimeout(() => {
            setIsRendered(false);
         }, animationDuration * 1000);
      }
   }, [opacity]);

   // #region css
   const base = css`
      position: fixed;
      bottom: 50px;
      width: 100%;
      display: ${isRendered ? 'flex' : 'none'};
      justify-content: center;
      opacity: ${opacity};
      transition: opacity ${animationDuration}s;
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
