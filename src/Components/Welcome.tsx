/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { accentColor } from '../utils';
import FaceManager from './FaceManager';

function Welcome() {
   const base = css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 300px;
      margin-left: 20px;
      margin-right: 20px;
   `;

   const welcomeBlockCss = css`
      margin-right: 20px;
   `;

   const faceBlockCss = css`
      width: 300px;
      height: 240px;
   `;

   const welcomeTextCss = css`
      font-size: 100px;
   `;

   const myNameIsTextCss = css`
      font-size: 36px;
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
