/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { backgroundColor, backgroundColorBlock, backgroundColorSubtle } from '../utils';

interface IProps {
   title: string;
   children: JSX.Element;
}

function ContentBlock({ title, children }: IProps) {
   const base = css`
      position: relative;
      display: flex;
      justify-content: center;
   `;

   const colorFrame = css`
      
      max-width: 800px;
      min-width: 60vw;
      
      position: relative;
   `;

   const titleCss = css`
      position: absolute;
      font-size: 200px;
      transform: rotate(-30deg);
      font-weight: bold;
      color: ${backgroundColorSubtle};
      z-index: 1;
   `;

   const contentCss = css`
      // position: absolute;
      margin-left: 200px;
      margin-top: 200px;
      padding: 20px;
      position: relative;
      background-color: ${backgroundColorBlock};
      border-radius: 10px;
      z-index: 2;
   `;

   return (
      <div css={base}>
         <div css={colorFrame}>
            <div css={titleCss}>{title}</div>
            <div css={contentCss}>
               {children}
            </div>
         </div>
      </div>
   );
}

export default ContentBlock;
