import { useEffect } from 'react';
import internal from 'stream';
import useCursorPosition from '../CustomHooks/useCursorPosition';
import Face from './Face';

function FaceManager() {
   const cursorPosition = useCursorPosition();

   const positionFromCenter = (position: {x: number, y: number}) => {
      // console.log(position.x);
      // console.log(window.innerWidth / 2);
      return {
         x: position.x - (window.innerWidth / 2),
         y: position.y - (window.innerHeight / 2)
      }
   }
   // TODO when you konami code, switches to a :P face, should only show on desktop
   // TODO needs to twist/skew more, need to have support for that
   // TODO needs to figure out where the center of the face is and make that the baseline
   // useEffect(() => {
   //    console.log(cursorPosition);
   // }, [cursorPosition]);

   

   return (
      <Face
         // leftEyeX={cursorPosition.x * 0.5}
         // leftEyeY={0}
         // rightEyeX={cursorPosition.x * -1}
         // rightEyeY={cursorPosition.y * 0.5}
         backTransform={`rotate(${positionFromCenter(cursorPosition).x * 0.1})`}
         neckTransform={`scale(${positionFromCenter(cursorPosition).x * 0.001 + 1}, ${positionFromCenter(cursorPosition).y * 0.002 + 1})`}
      />
   );
}

export default FaceManager;
