/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { accentColor, backgroundColor, primaryLinkHover } from '../../store';

export interface IProjectContainer {
   imageUrl: string;
   websiteUrl?: string;
   sourceUrl?: string;
   title: string;
   copy: string;
}
function ProjectContainer({ imageUrl, websiteUrl, sourceUrl, title, copy }: IProjectContainer) {
   const base = css`
      display: flex;
   `;

   const imageCss = css`
      width: 200px;
      height: 200px;
      border-top: solid ${accentColor};
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
   `;

   const contentCss = css`
      display: flex;
      flex-direction: column;
      border-top: solid ${accentColor};
      background-color: ${backgroundColor};
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      text-align: center;
      justify-content: space-between;
   `;

   const titleCss = css`
      margin-top: 5px;
      //font-weight: bold;
      color: ${accentColor};
   `;

   const copyCss = css`
      font-size: 16px;
      margin: 10px;
   `;

   const websiteSourceCss = css`
      margin-top: 10px;
      display: flex;
      justify-content: space-evenly;
   `;

   return (
      <div css={base}>
         <img css={imageCss} src={imageUrl} />

         <div css={contentCss}>
            <div css={titleCss}>{title}</div>
            <div css={copyCss}>{copy}</div>
            <div css={websiteSourceCss}>
               <span css={primaryLinkHover}>Website</span>
               <span css={primaryLinkHover}>Source</span>
            </div>
         </div>
      </div>
   );
}

export default ProjectContainer;
