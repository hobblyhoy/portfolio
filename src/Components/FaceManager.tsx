import { useEffect } from 'react';
import useCursorPosition from '../CustomHooks/useCursorPosition';
import Face from './Face';

function FaceManager() {
   const cursorPosition = useCursorPosition();

   // TODO when you konami code, switches to a :P face, should only show on desktop
   // TODO needs to twist/skew more, need to have support for that
   // TODO needs to figure out where the center of the face is and make that the baseline
   useEffect(() => {
      console.log(cursorPosition);
   }, [cursorPosition]);

   return (
      <Face
         leftEyeX={cursorPosition.x * 0.5}
         leftEyeY={0}
         rightEyeX={cursorPosition.x * -1}
         rightEyeY={cursorPosition.y * 0.5}
      />
   );
}

export default FaceManager;
