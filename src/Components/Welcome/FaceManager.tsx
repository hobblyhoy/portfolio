import React, { useEffect, useRef, useState } from 'react';
import Transformer from '../../Classes/Transformer';
import useCursorPosition, { Position } from '../../CustomHooks/useCursorPosition';
import { easeToZero } from '../../utils';
import Face from './Face';

// Configurable constants
const thresholdSize = 200; // size of the square at the center of the screen for threshold detection
const totalAnimationTime = 1000; //in milliseconds

// The theory- we have an SVG of my face, split up and randomly manipulated by SVG transforms keyed off
// of mouse movement. There is an invisible box that sits at the center of the viewport (what I call
// "threshold") which once we've crossed forces the pieces to animate into their original positions.
function FaceManager() {
   // state for cursor position
   const cursorPosition = useCursorPosition();
   const [cursorPositionOverride, _setCursorPositionOverride] = useState({ x: 0, y: 0 });
   const setCursorPositionOverride = (newPosition: Position) => {
      // There are expensive renders on cursorPositionOverride updates so ensure we're
      // only ever updating if the objects values actually change
      _setCursorPositionOverride(currentPosition => {
         if (currentPosition.x === newPosition.x && currentPosition.y === newPosition.y) {
            return currentPosition; // no update triggered
         } else {
            return newPosition;
         }
      });
   };

   // state for threshold/animation and our Transformers
   const [hasCrossedThreshold, setHasCrossedThreshold] = useState(false);
   const [transformProps, setTransformProps] = useState<Transformer[]>([]);
   const rafRef = useRef<number>();
   const animationStartTimeRef = useRef<number>();
   const animationStartPositionRef = useRef<Position>();

   // Watches the cursorPosition and has two jobs
   // (1) Indicate when the cursor has crossed over our threshold.
   // (2) sets cursorPositionOverride, which is the same as cursor position except is offset to
   //     the center of the screen and can be overridden once threshold is crossed.
   useEffect(() => {
      if (hasCrossedThreshold) return;

      const newPosition = {
         x: cursorPosition.x - Math.floor(window.innerWidth / 2),
         y: cursorPosition.y - Math.floor(window.innerHeight / 2),
      };

      if (
         window.innerWidth <= 768 ||
         (Math.abs(newPosition.x) < thresholdSize / 2 &&
            Math.abs(newPosition.y) < thresholdSize / 2)
      ) {
         setHasCrossedThreshold(true);
      } else {
         setCursorPositionOverride(newPosition);
      }
   }, [cursorPosition]);

   // If someone doesn't hit the threshold- here is a backup option where it collapses in on scroll
   useEffect(() => {
      const onScroll = (event: Event) => {
         setHasCrossedThreshold(true);
         window.removeEventListener('scroll', onScroll);
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   // Watches hasCrossedThreshold and kicks off animate() to restore the pieces to their
   // appropriate places
   useEffect(() => {
      if (hasCrossedThreshold) {
         rafRef.current = requestAnimationFrame(animate);
         return () => cancelAnimationFrame(rafRef.current!);
      }
   }, [hasCrossedThreshold]);

   const animate = (time: number) => {
      if (animationStartTimeRef.current == undefined) {
         animationStartTimeRef.current = time;
         animationStartPositionRef.current = cursorPositionOverride;
         rafRef.current = requestAnimationFrame(animate);
      } else {
         const elapsedTime = time - animationStartTimeRef.current;
         const progressFactor = elapsedTime / totalAnimationTime;

         if (progressFactor >= 1) {
            setCursorPositionOverride({ x: 0, y: 0 });
         } else {
            const newPosition: Position = {
               x: easeToZero(animationStartPositionRef.current!.x, progressFactor),
               y: easeToZero(animationStartPositionRef.current!.y, progressFactor),
            };
            setCursorPositionOverride(newPosition);
            rafRef.current = requestAnimationFrame(animate);
         }
      }
   };

   // Watches the cursorPositionOverride and generates all of the SVG transforms that
   // we'll be providing to Face. We use a custom Transformer object which handles
   // generating two transforms for each SVG element (keyed off cursor X + Y).
   useEffect(() => {
      const newTransformProps = [...transformProps];
      for (var i = 0; i <= 106; i++) {
         if (newTransformProps[i] === undefined) {
            newTransformProps[i] = new Transformer();
         }
         newTransformProps[i].xAxisValue = cursorPositionOverride.x;
         newTransformProps[i].yAxisValue = cursorPositionOverride.y;
      }
      setTransformProps(newTransformProps);
   }, [cursorPositionOverride]);

   return (
      <React.Fragment>
         {transformProps.length > 0 && <Face transformProps={transformProps} />}
      </React.Fragment>
   );
}

export default FaceManager;
// TODO when you konami code, switches to a :P face, should only show on desktop
