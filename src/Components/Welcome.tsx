/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { accentColor } from '../store';
import FaceManager from './FaceManager';

function Welcome() {
   const base = css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 300px;
      margin-left: 20px;
      margin-right: 20px;
      @media (max-width: 768px) {
         flex-direction: column-reverse;
         margin-top: 100px;
      }
   `;

   const welcomeBlockCss = css`
      margin-right: 20px;
      @media (max-width: 768px) {
         margin-left: 20px;
         text-align: center;
      }
   `;

   //TODO play with this might be able to get some mroe range by limighting the height
   const faceBlockCss = css`
      width: 400px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
         width: 250px;
         height: 250px;
      }
   `;

   const welcomeTextCss = css`
      font-size: 100px;
      @media (max-width: 768px) {
         font-size: 80px;
      }
   `;

   const myNameIsTextCss = css`
      font-size: 36px;
      margin-bottom: 15px;
      // display: flex;
      // align-items: center;
      @media (max-width: 768px) {
         font-size: 28px;
      }
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
            <div>
               I'm a <span css={accentColorCss}>web software engineer</span> and I love building
               stuff.
            </div>
         </div>
         <div css={faceBlockCss}>
            <FaceManager />
         </div>
      </div>
   );
}

export default Welcome;
