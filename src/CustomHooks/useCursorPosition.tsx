import { useState, useEffect } from "react";

function useCursorPosition() {
   const [position, setPosition] = useState({x: 0, y: 0});

   const movementUpdate = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
   }

   useEffect(() => {
      window.addEventListener("mousemove", movementUpdate);

      return () => {
         window.removeEventListener("mousemove", movementUpdate);
      }
   })

   return position;
}

export default useCursorPosition;