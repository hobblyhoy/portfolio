/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { primaryColorDisabled, primaryLinkHover } from '../../store';
import SlideBox from './SlideBox';

interface IProps {
   text: string;
   url?: string;
   tooltipText: string;
   isDisabled?: boolean;
}

function TooltipLink({ text, url, tooltipText, isDisabled = false }: IProps) {
   // Hover state
   const [isHovered, setIsHovered] = useState(false);

   // Positioning helpers
   const textRef = useRef<HTMLDivElement>(null);
   const tooltipRef = useRef<HTMLDivElement>(null);
   const [offset, setOffset] = useState(0);

   useEffect(() => {
      if (isHovered) {
         const textWidth = textRef.current?.offsetWidth ?? 0;
         const tooltipWidth = tooltipRef.current?.offsetWidth ?? 0;
         setOffset(Math.round((textWidth + tooltipWidth) / 2) * -1);
      }
   }, [isHovered]);

   const disabledCss = css`
      color: ${primaryColorDisabled};
      cursor: default;
   `;

   const tooltipContainerCss = css`
      position: absolute;
      transform: translateX(${offset}px) translateY(-50%);
   `;

   const tooltipCss = css`
      cursor: default;
      font-size: 16px;
   `;

   return (
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
         <span ref={textRef} css={isDisabled ? disabledCss : primaryLinkHover}>
            {isDisabled ? (
               text
            ) : (
               <a href={url} target="_blank">
                  {text}
               </a>
            )}
         </span>

         <span css={tooltipContainerCss}>
            <SlideBox
               isVisible={isHovered}
               slideInLength={20}
               slideInLengthMobile={20}
               duration={0.5}
            >
               <span css={tooltipCss} aria-hidden={!isHovered} ref={tooltipRef}>
                  {tooltipText}
               </span>
            </SlideBox>
         </span>
      </div>
   );
}

export default TooltipLink;
