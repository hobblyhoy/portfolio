import { random } from 'lodash';
import { chooseRandom } from '../utils';

// [multiplierAdjustment, additiveAdjustment]
const transformTypeFactors = {
   rotate: 0.05,
   scale: 0.001,
   skewX: 0.1,
   skewY: 0.1,
   translate: 1,
};

class Transformer {
   #type: 'rotate' | 'scale' | 'skewX' | 'skewY' | 'translate';
   #axis: 'x' | 'y';
   #axisValueFactor: number;
   axisValue: number;

   constructor() {
      this.#type = chooseRandom(Object.keys(transformTypeFactors));
      this.#axis = chooseRandom(['x', 'y']);
      this.#axisValueFactor = random(0.75, 1.25);
      this.axisValue = 0; //updates each cycle
   }

   toString() {
      const outputVal = this.axisValue * transformTypeFactors[this.#type] * this.#axisValueFactor;
      switch (this.#type) {
         case 'rotate':
            return `rotate(${outputVal})`;
         case 'scale':
            return `scale(${outputVal + 1}, ${outputVal + 1})`;
         case 'skewX':
            return `skewX(${outputVal})`;
         case 'skewY':
            return `skewY(${outputVal})`;
         case 'translate':
            return `translate(${outputVal}, ${outputVal})`;
      }
   }

   get axis() {
      return this.#axis;
   }
}

export default Transformer;
