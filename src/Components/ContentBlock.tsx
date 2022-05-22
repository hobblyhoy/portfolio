/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { backgroundColor, backgroundColorBlock, backgroundColorSubtle } from '../utils';

interface IProps {
   title: string;
   children: JSX.Element;
}

function ContentBlock({ title, children }: IProps) {

   const frameRef = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);
   
   useEffect(() => {
      // Fade in + slide up effect driver
      const onScroll = (event: Event) => {
         const userScrollDepth = window.innerHeight + window.scrollY;
         const topOfElement = window.pageYOffset + (frameRef.current?.getBoundingClientRect().top || Number.POSITIVE_INFINITY);
         const scrollBuffer = 200; // How far past the top of the element we need to scroll before it becomes visible
         if (userScrollDepth >= topOfElement + scrollBuffer) {
            console.log('reached the element!');
            setIsVisible(true);
            window.removeEventListener('scroll', onScroll);
         }
      }

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   // representing the margin pixel heights _after_ the slide in effect
   const topMargin = 300;
   const bottomMargin = 100;
   const slideInLength = 100;
   const slideInLengthMobile = 50;

   const base = css`
      display: flex;
      justify-content: center;
      // opacity: ${isVisible ? 1 : 0};
      opacity: 1;
      margin-top: ${isVisible ? topMargin : topMargin + slideInLength}px;
      margin-bottom: ${isVisible ? bottomMargin : bottomMargin - slideInLength}px;
      @media (max-width: 768px) {
         margin-top: ${isVisible ? '100px' : '150px'};

      }

      margin-left: 20px;
      margin-right: 20px;
      //margin-bottom: 20px;

      transition-property: margin-top, margin-bottom, opacity;
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
            <div css={titleCss}>{title}</div>
            <div css={contentCss}>{children}</div>
         </div>
      </div>
   );
}

export default ContentBlock;
