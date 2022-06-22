/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
import { backgroundColorBlock } from '../../store';
import debounce from 'lodash/debounce';
import SlideBox from './SlideBox';

interface IProps {
   title: string;
   children: JSX.Element | JSX.Element[];
   id: string;
}

// Configurable constants
const scrollBuffer = 100; // How far past the top of the element we need to scroll before it becomes visible
const slideInLength = 200; // How far up will the component slide

function ContentBlock({ title, children, id }: IProps) {
   const frameRef = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      // Fade in + slide up effect driver
      const onScroll = debounce(
         (event: Event) => {
            const userScrollDepth = window.innerHeight + window.scrollY;
            const topOfElement =
               window.pageYOffset +
               (frameRef.current?.getBoundingClientRect().top || Number.POSITIVE_INFINITY);

            if (userScrollDepth >= topOfElement + scrollBuffer) {
               setIsVisible(true);
               window.removeEventListener('scroll', onScroll);
            }
         },
         50,
         { maxWait: 50 }
      );

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const base = css`
      display: flex;
      justify-content: center;

      padding-left: 20px;
      padding-right: 20px;
   `;

   const frame = css`
      width: 800px;
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
         <div css={frame} id={id}>
            <SlideBox
               isVisible={isVisible}
               slideInLength={slideInLength}
               slideInLengthMobile={slideInLength / 2}
            >
               <div css={titleCss} ref={frameRef}>
                  {title}
               </div>
               <div css={contentCss}>{children}</div>
            </SlideBox>
         </div>
      </div>
   );
}

export default ContentBlock;
