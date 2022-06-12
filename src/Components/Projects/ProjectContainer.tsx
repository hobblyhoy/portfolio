/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { accentColor, backgroundColor } from '../../store';

interface IProps {
   imageUrl: string;
   websiteUrl?: string;
   sourceUrl?: string;
   title: string;
   copy: string;
}
function ProjectContainer({ imageUrl, websiteUrl, sourceUrl, title, copy }: IProps) {
   const base = css`
      display: flex;
   `;

   const imageCss = css`
      width: 150px;
      height: 150px;
      border-top: solid ${accentColor};
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
   `;

   const contentCss = css`
      border-top: solid ${accentColor};
      display: flex;
      flex-direction: column;
      background-color: ${backgroundColor};
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      text-align: center;
   `;

   return (
      <div css={base}>
         <img css={imageCss} src={imageUrl} />
         {/* <div css={imageFrameCss}>
         // </div> */}

         <div css={contentCss}>
            <span>{title}</span>
            <span>{copy}</span>
            <span>TODO website and source</span>
         </div>
      </div>
   );
}

export default ProjectContainer;
