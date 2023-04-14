/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { accentColor } from '../../store';
import FaceManager from './FaceManager';

function Welcome() {
   const base = css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      margin-left: 20px;
      margin-right: 20px;
      @media (max-width: 768px) {
         flex-direction: column-reverse;
         margin-bottom: 100px;
      }
   `;

   const welcomeBlockCss = css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 20px;
      @media (max-width: 768px) {
         margin-left: 20px;
         text-align: center;
      }
   `;

   const faceBlockCss = css`
      // we've created an svg frame thats 400px oversized to allow more room for animation
      // so we pull back in the margin to make everything line back up again.
      margin-left: -200px;
      margin-right: -200px;
      width: 800px;
      height: 800px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
         width: 250px;
         height: 250px;
         margin-left: 0;
         margin-right: 0;
      }
   `;

   const welcomeTextCss = css`
      font-size: 150px;
      @media (max-width: 768px) {
         font-size: 80px;
      }
   `;

   const myNameIsTextCss = css`
      font-size: 54px;
      margin-bottom: 30px;
      @media (max-width: 768px) {
         font-size: 28px;
         margin-bottom: 15px;
      }
   `;

   const iAmATextCss = css`
      font-size: 23px;
   `;

   const accentColorCss = css`
      color: ${accentColor};
   `;


   return (
      <div css={base}>
         <div css={welcomeBlockCss}>
            <div css={welcomeTextCss}>Welcome!</div>
            <div css={myNameIsTextCss}>
               My name is <span css={accentColorCss}>Nathan Rooke</span>
            </div>
            <div css={iAmATextCss}>
               I'm a <span css={accentColorCss}>web software engineer</span> and I love building
               stuff
            </div>
         </div>
         <div css={faceBlockCss}>
            <FaceManager />
         </div>
      </div>
   );
}

export default Welcome;
