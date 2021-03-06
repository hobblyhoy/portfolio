import random from 'lodash/random';

/**
 * An easing function to take you from some starting position to 0.
 * @param start number indicating some kind of positional starting point
 * @param progressFactor number from 0 => 1 indicating the progress thus far. 
 * This is probably time but any linear input will work
 * @returns an int for the appropriate position
 */
export const easeToZero = (start: number, progressFactor: number): number => {
   if (progressFactor < 0 || progressFactor > 1) throw 'smooth / sensical graph only guaranteed from 0 to 1';

   // Keeping these experimental ones around in case I change my mind again
   //return Math.floor(start - (start * progressFactor)); //Linear
   //return Math.floor(start - (start * Math.cbrt(progressFactor))); //Cubic root
   //return Math.floor(start - (start * Math.pow(progressFactor, 0.25))); //Quad root
   return Math.floor(start - start * Math.sqrt(1 - Math.pow(progressFactor - 1, 2))); //Circle quadrant 2
};

/**
 * 
 * @param arr any given array
 * @returns a random element from the given array
 */
export const chooseRandom = (arr: any[]) => {
   const randNum = random(0, arr.length - 1);
   return arr[randNum];
};
