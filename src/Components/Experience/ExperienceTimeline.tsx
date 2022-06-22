/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { accentColor, backgroundColor } from '../../store';
import { IWorkDetails, workDetailsList } from '../../copy';
import range from 'lodash/range';
import { differenceInDays } from 'date-fns';

const currentDate = new Date();
// a little helper array since we'll need to iterate over this set a few times
const yearBlocks = range(2012, currentDate.getFullYear() + 1);

interface IProps {
   selectedWorkDetails: IWorkDetails;
   clickHandler: Function;
}
function ExperienceTimeline({ selectedWorkDetails, clickHandler }: IProps) {
   const base = css`
      display: grid;
      grid-template-columns: ${yearBlocks.map(x => ` [year${x}] auto`).join('')};
      grid-template-rows: 30px 30px;
      font-size: 16px;
   `;

   const yearTextCss = css`
      border-left: 4px solid ${backgroundColor};
      border-top: 4px solid ${backgroundColor};
      font-size: 14px;
      display: flex;
      align-items: end;
      padding-left: 2px;
   `;

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
         color: ${workDetails === selectedWorkDetails ? accentColor : 'unset'};
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
      <div css={base}>
         {workDetailsList.map(workDetails => (
            <div
               css={gridWorkDetailsCss(workDetails)}
               onClick={() => clickHandler(workDetails)}
               key={workDetails.companyFullName}
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
   );
}

export default ExperienceTimeline;
