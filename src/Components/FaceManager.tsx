import React, { useEffect, useRef, useState } from 'react';
import internal from 'stream';
import Transformer from '../Classes/Transformer';
import useCursorPosition, { Position } from '../CustomHooks/useCursorPosition';
import { easeProgress } from '../utils';
import Face from './Face';

function FaceManager() {
   // state for cursor position
   const cursorPosition = useCursorPosition();
   const [cursorPositionOverride, _setCursorPositionOverride] = useState({ x: 0, y: 0 });
   const setCursorPositionOverride = (newPosition:Position) => {
      // Little perf boost since we have so much riding on this update now
      _setCursorPositionOverride(currentPosition => {
         if (currentPosition.x === newPosition.x && currentPosition.y === newPosition.y) {
            return currentPosition; // no update triggered
         } else {
            return newPosition;
         }
      });
   }

   // state for threshold and animation
   const [hasCrossedThreshold, setHasCrossedThreshold] = useState(false);
   const [transformProps, setTransformProps] = useState<Transformer[]>([]);
   const rafRef = useRef<number>();
   const animationStartTimeRef = useRef<number>();
   const animationStartPositionRef = useRef<Position>();

   // Configurable constants
   const thresholdSize = 100; // size of the square at the center of the screen for threshold detection
   const totalAnimationTime = 1000; //in milliseconds

   // Set our cursor position override which offsets the 0,0 position to the center
   // of the viewport and detects+sets our threshold indicator
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

   // logic for threshold and animation
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
               x: easeProgress(animationStartPositionRef.current!.x, progressFactor),
               y: easeProgress(animationStartPositionRef.current!.y, progressFactor),
            };
            setCursorPositionOverride(newPosition);
            console.log(time);
            rafRef.current = requestAnimationFrame(animate);
         }
      }
   };

   // TODO when you konami code, switches to a :P face, should only show on desktop

   // useEffect(() => {
   //    console.log({x: cursorPositionOverride.x, y: cursorPositionOverride.y});
   // },[cursorPositionOverride])

   useEffect(() => {
      const newTransformProps = [...transformProps];
      for (var i = 0; i <= 150; i++) {
         //newTransformProps[i] = `skewX(${cursorPositionOverride.x * 0.1}) skewY(${cursorPositionOverride.y * 0.1})`
         if (newTransformProps[i] === undefined) {
            newTransformProps[i] = new Transformer();
         }
         // const tempAxisValue = cursorPositionOverride[newTransformProps[i].axis];
         // console.log(tempAxisValue);
         // newTransformProps[i].axisValue = tempAxisValue;
         newTransformProps[i].axisValue = cursorPositionOverride[newTransformProps[i].axis];
      }
      setTransformProps(newTransformProps);
   }, [cursorPositionOverride]);

   return (
      <React.Fragment>
         {transformProps.length > 0 && (
            <Face
               transformProps={transformProps}
            />
         )}
      </React.Fragment>
   );
}

export default FaceManager;
