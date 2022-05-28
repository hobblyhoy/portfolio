/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { useRef, useState, useEffect, useMemo } from 'react';
import useCursorPosition, { Position } from '../CustomHooks/useCursorPosition';

interface IProps {
   sizeX: number;
   sizeY: number;
   children: string | JSX.Element;
}

// The idea with WiggleBox is to surround any given element with a layer of padding on
// all sides that dynamically shifts around such that the element is "pulled" towards 
// the mouse. The further the mouse from the element, the stronger the pull.

/**
 * @deprecated It's cool, and it works, but it turns out mostly just add distraction for little
 * artistic / visual value. Cutting it but will keep around in case I find a use for it.
 */
function WiggleBox({ sizeX, sizeY, children }: IProps) {
   const wiggleBoxRef = useRef<HTMLDivElement>(null);
   const [paddingBottom, setPaddingBottom] = useState(sizeY);
   const paddingTop = useMemo(() => 2 * sizeY - paddingBottom, [paddingBottom]);
   const [paddingRight, setPaddingRight] = useState(sizeX);
   const paddingLeft = useMemo(() => 2 * sizeX - paddingRight, [paddingRight]);
   const cursorPosition = useCursorPosition();

   const base = css`
      padding-top: ${paddingTop}px;
      padding-bottom: ${paddingBottom}px;
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;
   `;
   useEffect(() => {
      // if the top of our WiggleBox is below the fold or the bottom of the WiggleBox
      // above the fold then return early.
      const widthOfViewport = window.innerWidth;
      const heightOfViewport = window.innerHeight;
      const boundingRect = wiggleBoxRef.current!.getBoundingClientRect();
      if (boundingRect.top > heightOfViewport || boundingRect.bottom < 0) return;

      // figure out where the center of our WiggleBox is on the viewport
      const wiggleBoxCenter: Position = {
         x: boundingRect.left + boundingRect.width / 2,
         y: boundingRect.top + boundingRect.height / 2,
      };

      // determine the maximum distance from the center to each edge, this defines our
      // maximum "pull" the WiggleBox can have
      const maxDistanceX = Math.max(wiggleBoxCenter.x, widthOfViewport - wiggleBoxCenter.x);
      const maxDistanceY = Math.max(wiggleBoxCenter.y, heightOfViewport - wiggleBoxCenter.y);

      // Using X coordinate as an example..
      // Take the Cursors X position and subtract WiggleBox X position then divide by
      // the max just found to get a factor for cursor distance between center and longest edge.
      // It will be negative if left of the box and thats fine.
      const xFactor = (cursorPosition.x - wiggleBoxCenter.x) / maxDistanceX;
      const yFactor = (cursorPosition.y - wiggleBoxCenter.y) / maxDistanceY;

      // Now we want a whole number to indicate the padding to apply to the right side
      // and must fall within the range from 0 => 2 * sizeX, thus...
      setPaddingRight(Math.round(sizeX - (sizeX * xFactor)));
      setPaddingBottom(Math.round(sizeY - (sizeY * yFactor)));
   }, [cursorPosition]);

   return <div ref={wiggleBoxRef} css={base}>{children}</div>;
}

export default WiggleBox;
