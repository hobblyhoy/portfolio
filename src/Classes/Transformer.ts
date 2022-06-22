import random from 'lodash/random';
import { chooseRandom } from '../utils';

const transformTypeFactors = {
   rotate: 0.05,
   scale: 0.001,
   skewX: 0.1,
   skewY: 0.1,
   translate: 1,
};

type TransformType = 'rotate' | 'scale' | 'skewX' | 'skewY' | 'translate';

class Transformer {
   #xType: TransformType;
   #yType: TransformType;
   #valueFactor: number;
   xAxisValue: number;
   yAxisValue: number;

   constructor() {
      this.#xType = chooseRandom(Object.keys(transformTypeFactors));
      this.#yType = chooseRandom(Object.keys(transformTypeFactors));
      this.#valueFactor = random(0.75, 1.25);
      this.xAxisValue = 0; //updates each cycle
      this.yAxisValue = 0; //updates each cycle
   }

   #getTransformString(type: TransformType, value: number) {
      const outputVal = value * transformTypeFactors[type] * this.#valueFactor;
      switch (type) {
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

   toString() {
      return (
         this.#getTransformString(this.#xType, this.xAxisValue) +
         ' ' +
         this.#getTransformString(this.#yType, this.yAxisValue)
      );
   }
}

export default Transformer;
