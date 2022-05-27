import { useEffect, useRef, useState } from 'react';
import internal from 'stream';
import useCursorPosition, { Position } from '../CustomHooks/useCursorPosition';
import { linearProgress } from '../utils';
import Face from './Face';

function FaceManager() {
   // state for cursor position
   const cursorPosition = useCursorPosition();
   const [cursorPositionOverride, setCursorPositionOverride] = useState({x: 0, y: 0});

   // state for threshold and animation
   const [hasCrossedThreshold, setHasCrossedThreshold] = useState(false);
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

      if (Math.abs(newPosition.x) < thresholdSize/2 && Math.abs(newPosition.y) < thresholdSize/2) {
         setHasCrossedThreshold(true);
      } else {
         setCursorPositionOverride(newPosition);
      }
      
   }, [cursorPosition])

   // logic for threshold and animation
   useEffect(() => {
      if (hasCrossedThreshold) {
         rafRef.current = requestAnimationFrame(animate);
         return () => cancelAnimationFrame(rafRef.current!);
      }
   }, [hasCrossedThreshold])

   const animate = (time: number) => {
      if (animationStartTimeRef.current == undefined){
         animationStartTimeRef.current = time;
         animationStartPositionRef.current = cursorPositionOverride;
         rafRef.current = requestAnimationFrame(animate);
      } else {
         const elapsedTime = time - animationStartTimeRef.current;
         
         const progressFactor = elapsedTime / totalAnimationTime;

         if (progressFactor >= 1) {
            setCursorPositionOverride({x: 0, y: 0});
         } else {
            const newPosition: Position = {
               x: linearProgress(animationStartPositionRef.current!.x, progressFactor),
               y: linearProgress(animationStartPositionRef.current!.y, progressFactor)
            }
            setCursorPositionOverride(newPosition);
            console.log(time);
            rafRef.current = requestAnimationFrame(animate);
         }
      }
   }

   // TODO when you konami code, switches to a :P face, should only show on desktop
   // TODO needs to twist/skew more, need to have support for that
   // TODO needs to figure out where the center of the face is and make that the baseline

   return (
      <Face
         backTransform={`rotate(${cursorPositionOverride.x * 0.05})`}
         neckTransform={`scale(${cursorPositionOverride.x * 0.001 + 1}, ${cursorPositionOverride.y * 0.002 + 1 })`}
         noseEarsMouthTransform={`skewX(${cursorPositionOverride.x * 0.1}) skewY(${cursorPositionOverride.y * 0.1})`}
         hairEyesTransform={`translate(${cursorPositionOverride.y * 1}, ${cursorPositionOverride.x * 1})`}
      />
   );
}

export default FaceManager;
