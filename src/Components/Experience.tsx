/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { backgroundColor } from '../utils';
import ContentBlock from './ContentBlock';

function Experience() {
   const gridCss = css`
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto;
      grid-template-rows: 30px 30px;
      font-size: 16px;
   `;

   const yearTextCss = css`
      border-left: 6px solid ${backgroundColor};
      border-top: 2px solid ${backgroundColor};
   `;

   const yearBlockCss = css`
      background-color: lightgray;
   `

   const yearBlockCss2 = css`
      background-color: gray;
   `  
   
   const workDetailsCss = css`
      min-height: 120px;

   `;
   
   return (
      <ContentBlock title="XP" id="experience">
         <div>
            <div>So what have you done, anyway?</div>
            <div css={gridCss}>
               <div css={yearBlockCss}></div>
               <div css={yearBlockCss}></div>
               <div css={yearBlockCss}></div>
               <div css={yearBlockCss}></div>
               <div css={yearBlockCss2}></div>
               <div css={yearBlockCss2}></div>
               <div css={yearBlockCss}></div>
               <div css={yearBlockCss2}></div>
               <div css={yearBlockCss2}></div>
               <div css={yearBlockCss2}></div>
               <div css={yearBlockCss2}></div>
               <div css={yearTextCss}>12</div>
               <div css={yearTextCss}>13</div>
               <div css={yearTextCss}>14</div>
               <div css={yearTextCss}>15</div>
               <div css={yearTextCss}>16</div>
               <div css={yearTextCss}>17</div>
               <div css={yearTextCss}>18</div>
               <div css={yearTextCss}>19</div>
               <div css={yearTextCss}>20</div>
               <div css={yearTextCss}>21</div>
               <div css={yearTextCss}>22</div>
            </div>
            <div css={workDetailsCss}>
               Worked a bunch did yada yda
            </div>
         </div>
      </ContentBlock>
   );
}
export default Experience;
