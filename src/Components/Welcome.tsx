/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { accentColor } from '../utils';
import FaceManager from './FaceManager';

function Welcome() {
   return (
      <div
         css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 200px;
            margin-left: 20px;
            margin-right: 20px;
         `}
      >
         <div
            css={css`
               margin-right: 20px;
            `}
         >
            <div
               css={css`
                  font-size: 100px;
               `}
            >
               Welcome!
            </div>
            <div
               css={css`
                  font-size: 36px;
               `}
            >
               My name is{' '}
               <span
                  css={css`
                     color: ${accentColor};
                  `}
               >
                  Nathan Rooke
               </span>
            </div>
            <div>I'm a <span css={css`color: ${accentColor};`}>web software engineer</span> and I love building stuff.</div>
         </div>
         <div style={{ width: '300px', height: '240px' }}>
            <FaceManager />
         </div>
      </div>
   );
}

export default Welcome;
