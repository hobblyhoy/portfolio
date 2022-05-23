/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { backgroundColor, backgroundColorBlock, backgroundColorSubtle } from '../utils';
import { debounce } from 'lodash';

interface IProps {
   title: string;
   children: JSX.Element;
   id: string;
}

// Configurable constants
const scrollBuffer = 100; // How far past the top of the element we need to scroll before it becomes visible
const topPadding = 200; // representing the padding state _after_ the slide in effect
const bottomPadding = 100; // representing the padding state _after_ the slide in effect
const slideInLength = 100; // How far up will the component slide
const mobileAdjustmentFactor = 0.5; // factor applied to adjust all these distances for mobile

function ContentBlock({ title, children, id }: IProps) {

   const frameRef = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);
   
   useEffect(() => {
      // Fade in + slide up effect driver
      const onScroll = debounce((event: Event) => {
         const userScrollDepth = window.innerHeight + window.scrollY;
         const topOfElement = window.pageYOffset + (frameRef.current?.getBoundingClientRect().top || Number.POSITIVE_INFINITY);
         
         if (userScrollDepth >= topOfElement + scrollBuffer) {
            console.log('reached the element!');
            setIsVisible(true);
            window.removeEventListener('scroll', onScroll);
         }
      }, 50);

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);



   const base = css`
      display: flex;
      justify-content: center;
      opacity: ${isVisible ? 1 : 0};
      padding-top: ${isVisible ? topPadding : topPadding + slideInLength}px;
      padding-bottom: ${isVisible ? bottomPadding : bottomPadding - slideInLength}px;
      @media (max-width: 768px) {
         padding-top: ${(isVisible ? topPadding : topPadding + slideInLength) * mobileAdjustmentFactor}px;
         padding-bottom: ${(isVisible ? bottomPadding : bottomPadding - slideInLength) * mobileAdjustmentFactor}px;
      }

      padding-left: 20px;
      padding-right: 20px;

      transition-property: padding-top, padding-bottom, opacity;
      transition-duration: 1s;
   `;

   const frame = css`
      max-width: 800px;
   `;

   const titleCss = css`
      font-size: 200px;
      margin-bottom: -66px;
      @media (max-width: 768px) {
         font-size: 80px;
         margin-bottom: -26px;
      }
      font-weight: bold;
      font-style: italic;
      color: ${backgroundColorBlock};
      display: flex;
      justify-content: end;
   `;

   const contentCss = css`
      padding: 20px;
      background-color: ${backgroundColorBlock};
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
      line-height: 1.5;
   `;

   return (
      <div css={base}>
         <div css={frame} ref={frameRef}>
            <div css={titleCss} id={id}>{title}</div>
            <div css={contentCss}>{children}</div>
         </div>
      </div>
   );
}

export default ContentBlock;
