/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// css
export const backgroundColor = '#1B1B3A';
export const backgroundColorBlock = '#282855'; // +9 brightness
export const backgroundColorSubtle = '#171732'; // -27 brightness

export const primaryColor = '#BDBDE0';
export const primaryColorHover = '#E9E9F4'; //+66 brightness

export const accentColor = '#DB3E00';
export const accentColorHover = '#D6B0D6';

export const boringColor = '#4e4e4e';
export const boringColorBright = '#959595';

export const primaryLinkHover = css`
   cursor: pointer;
   color: ${primaryColor};
   &:hover {
      color: ${primaryColorHover};
   }
`;

export const accentLinkHover = css`
   cursor: pointer;
   font-weight: bold;
   color: ${primaryColor};
   &:hover {
      color: ${accentColor};
   }
`;

// standards
export const collapsedHeaderHeight = 70; // measured in pixels

// Static data
export interface IWorkDetails {
   companyLabel: string | JSX.Element;
   companyFullName: string;
   title: string;
   startYear: number;
   endYear: number | null;
   description: JSX.Element;
}

export const workDetailsList: IWorkDetails[] = [
   {
      companyLabel: 'iTAN',
      companyFullName: 'iTAN Franchising',
      title: 'Business Intelligence and IT Administrator',
      startYear: 2012,
      endYear: 2016, 
      description: <div>Hi</div>,
   },
   {
      companyLabel: 'MREN',
      companyFullName: 'MREN',
      title: 'Software Developer',
      startYear: 2016,
      endYear: 2018,
      description: <div>Hi</div>,
   },
   {
      companyLabel: <FontAwesomeIcon icon={faPlaneDeparture} />,
      companyFullName: 'Sabbatical',
      title: 'Freelancer / Transient',
      startYear: 2018,
      endYear: 2019,
      description: <div>Hi</div>,
   },
   {
      companyLabel: 'iGrad',
      companyFullName: 'iGrad Financial Wellness',
      title: 'Software Engineer',
      startYear: 2019,
      endYear: null,
      description: <div>TODO left off here- need to get the custom UL logic in here. Also Experience has gotten too big, need to extract out the grid and description into their own files</div>,
   },
];