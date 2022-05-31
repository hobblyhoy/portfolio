/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { accentColor, backgroundColor, backgroundColorBlock, IWorkDetails, workDetailsList } from '../store';
import ContentBlock from './ContentBlock';
import { range } from 'lodash';
import { useState } from 'react';
import { differenceInDays } from 'date-fns';


const currentDate = new Date();

function Experience() {
   const [selectedWorkDetails, setSelectedWorkDetails] = useState(workDetailsList[3]);

   // a little helper array since we'll need to iterate over this set a few times
   const yearBlocks = range(2012, currentDate.getFullYear() + 1);

   const gridCss = css`
      display: grid;
      grid-template-columns: ${yearBlocks.map(x => ` [year${x}] auto`).join('')};
      grid-template-rows: 30px 30px;
      font-size: 16px;
   `;

   const yearTextCss = css`
      border-left: 6px solid ${backgroundColor};
      border-top: 4px solid ${backgroundColor};
   `;

   const workDescriptionContainerCss = css`
      min-height: 120px;
   `;

   const workDescriptionTitleYearCss = css`
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
   `

   const gridWorkDetailsCss = (workDetails: IWorkDetails) => {
      return css`
         grid-column-start: ${'year' + workDetails.startYear};
         grid-column-end: ${workDetails.endYear ? `year${workDetails.endYear}` : '-1'};
         padding-bottom: 4px;
      `;
   };

   const workDetailsCss = (workDetails: IWorkDetails) => {
      return css`
         background-color: ${backgroundColor};
         height: 100%;
         border-radius: 5px;
         margin-left: 2px;
         margin-right: 2px;
         text-align: center;
         color: ${workDetails === selectedWorkDetails ? accentColor : backgroundColorBlock};
         cursor: pointer;
         width: ${(() => {
            if (workDetails.endYear != null) return 'unset';
            // We want our last block to always end at the appropriate spot on our timeline now and forever 
            // which means doing a little date math..
            const startDate = new Date(workDetails.startYear, 0, 1);
            const endOfYear = new Date(currentDate.getFullYear() + 1, 0, 1);
            const daysSoFar = differenceInDays(startDate, currentDate);
            const daysTotal = differenceInDays(startDate, endOfYear);
            return (daysSoFar / daysTotal) * 100 + '%';
         })()};

         &:hover {
            color: ${accentColor};
         }
      `;
   };

   return (
      <ContentBlock title="XP" id="experience">
         <div>
            <div css={gridCss}>
               {workDetailsList.map(workDetails => (
                  <div
                     css={gridWorkDetailsCss(workDetails)}
                     onClick={() => setSelectedWorkDetails(workDetails)}
                  >
                     <div css={workDetailsCss(workDetails)}>{workDetails.companyLabel}</div>
                  </div>
               ))}
               {yearBlocks.map(year => (
                  <div key={year} css={yearTextCss}>
                     '{year - 2000}
                  </div>
               ))}
            </div>
            <div css={workDescriptionContainerCss}>
               <div css={workDescriptionTitleYearCss}>
                  <span>{selectedWorkDetails.title}</span>
                  <span>{selectedWorkDetails.startYear} <FontAwesomeIcon icon={faRightLong} /> {selectedWorkDetails.endYear ? selectedWorkDetails.endYear : 'Current'}</span>
               </div>
               <div>{selectedWorkDetails.companyFullName}</div>
               {selectedWorkDetails.description}
            </div>
         </div>
      </ContentBlock>
   );
}
export default Experience;
