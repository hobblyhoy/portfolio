/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { accentColor, IWorkDetails } from '../../store';

interface IProps {
   selectedWorkDetails: IWorkDetails,
}
function ExperienceDescription({selectedWorkDetails}: IProps) {
   const base = css`
      min-height: 120px;
   `;

   const titleAndYearWrapperCss = css`
      display: flex;
      margin-top: 10px;
      justify-content: space-between;
   `;

   const titleCss = css`
      color: ${accentColor};
      padding-right: 15px;
   `

   return (
      <div css={base}>
         <div css={titleAndYearWrapperCss}>
            <span css={titleCss}>{selectedWorkDetails.title}</span>
            <span>
               {selectedWorkDetails.startYear} <FontAwesomeIcon icon={faRightLong} />{' '}
               {selectedWorkDetails.endYear ? selectedWorkDetails.endYear : 'Current'}
            </span>
         </div>
         <div>{selectedWorkDetails.companyFullName}</div>
         {selectedWorkDetails.description}
      </div>
   );
}

export default ExperienceDescription;
