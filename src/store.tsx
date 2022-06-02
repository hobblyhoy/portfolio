/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomLi from './Components/SharedComponents/CustomLi';
import CustomUl from './Components/SharedComponents/CustomUl';

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
      description: (
         <CustomUl>
            <CustomLi>
               Managed corporate and in-store networking, POSs, and IT infrastructure.
            </CustomLi>
            <CustomLi>
               Advised on business trends and opportunities using custom SQL/SSRS Reporting.
            </CustomLi>
            <CustomLi>
               Built and deployed a fully automated in-store music and digital signage system using
               Python and Bash to keep marketing deployments and content control simple and
               up-to-date.
            </CustomLi>
         </CustomUl>
      ),
   },
   {
      companyLabel: 'MREN',
      companyFullName: 'MREN',
      title: 'Software Developer',
      startYear: 2016,
      endYear: 2018,
      description: (
         <CustomUl>
            <CustomLi>
               Utilized HTML, JavaScript, and CSS alongside jQuery, Bootstrap, and Knockout
               libraries and frameworks for frontend SPA development.
            </CustomLi>
            <CustomLi>Used C# and ASP.NET framework for backend development.</CustomLi>
            <CustomLi>
               Implemented a site-wide IndexedDB based caching solution to greatly decrease initial
               load time for customers.
            </CustomLi>
            <CustomLi>
               Developed an integration testing application using image histogram differences
               integrated with BrowserStack and Selenium API.
            </CustomLi>
            <CustomLi>
               Built utilities for system statistics for staff with automated emailed reports.
            </CustomLi>
            <CustomLi>
               Created a site-wide activity monitoring system, greatly improving customer support
               capabilities.
            </CustomLi>
         </CustomUl>
      ),
   },
   {
      companyLabel: <FontAwesomeIcon icon={faPlaneDeparture} />,
      companyFullName: 'Sabbatical',
      title: 'Freelancer / Transient',
      startYear: 2018,
      endYear: 2019,
      description: (
         <CustomUl>
            <CustomLi>
               Learned and built projects with modern frontend frameworks Angular, React, and Vue.
            </CustomLi>
            <CustomLi>Various freelance / side jobs earning literally 10's of dollars.</CustomLi>
            <CustomLi>Assisted in duck handling at a remote duck sanctuary (not a joke).</CustomLi>
         </CustomUl>
      ),
   },
   {
      companyLabel: 'iGrad',
      companyFullName: 'iGrad Financial Wellness',
      title: 'Software Engineer',
      startYear: 2019,
      endYear: null,
      description: (
         <CustomUl>
            <CustomLi>
               Frontend development using the latest frameworks and best practices for HTML,
               JavaScript, and CSS. Backend development using C# on the .NET and .NET Core
               frameworks.
            </CustomLi>
            <CustomLi>
               Support and advise through the company’s transition from AngularJS to React frontend.
            </CustomLi>
            <CustomLi>
               Migrated development team from VFS to git. Supported the team through policies and
               documentation as well as becoming the main point of contact for git issues and
               decisions.
            </CustomLi>
            <CustomLi>
               Researched and implemented a Database Projects instance and integrated automatic
               database deployments into Azure DevOps pipeline.
            </CustomLi>
         </CustomUl>
      ),
   },
];
