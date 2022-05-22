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

   // Fade in + slide up effect
   // Continuously compare the top of the content block and the bottom of the page.
   // once that threshold is reached, reduce the margin and set opacity to 1 
   const frameRef = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const onScroll = (event: Event) => {
         //console.log(event);
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


   const base = css`
      display: flex;
      justify-content: center;
      opacity: ${isVisible ? 1 : 0};
      margin-top: ${isVisible ? '300px' : '400px'};
      @media (max-width: 768px) {
         margin-top: ${isVisible ? '100px' : '150px'};
      }

      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 20px;

      transition-property: margin-top, opacity;
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
