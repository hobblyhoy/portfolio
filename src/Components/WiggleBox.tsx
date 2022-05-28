/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { useRef, useState, useEffect } from 'react';
import { Position } from '../CustomHooks/useCursorPosition';

interface IProps {
   sizeX: number;
   sizeY: number;
   children: JSX.Element;
   cursorPosition: Position;
}

function WiggleBox({ sizeX, sizeY, children, cursorPosition }: IProps) {
   const wiggleBoxRef = useRef<HTMLDivElement>(null);
   const [paddingTop, setPaddingTop] = useState(sizeY);
   const [paddingBottom, setPaddingBottom] = useState(sizeY);
   const [paddingLeft, setPaddingLeft] = useState(sizeX);
   const [paddingRight, setPaddingRight] = useState(sizeX);

   const base = css`
      padding-top: ${paddingTop}px;
      padding-bottom: ${paddingBottom}px;
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;
   `;
   useEffect(() => {
      // figure out where the center of our wiggle box is on the viewport
      // get the total dimensions of the viewport
      // calculate the X/Y distance from each edge
   }, [cursorPosition]);
   return <div ref={wiggleBoxRef}>{children}</div>;
}

export default WiggleBox;
