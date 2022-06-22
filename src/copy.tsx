/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomLi from './Components/SharedComponents/CustomLi';
import CustomUl from './Components/SharedComponents/CustomUl';
// Images
import LmoImage from './Assets/lmo5.jpg';
import PingTrackImage from './Assets/PingTrack.jpg';
import QuiltiImage from './Assets/Quilti.jpg';
import CommForwardImage from './Assets/CommForward.jpg';
import PortfolioImage from './Assets/Portfolio.jpg';
import { accentColorCss } from './store';

// Central place for all the copy I may want to configure / make adjustments as things change over time

// About Me
export const aboutMeList = [
   'Figure out the hard stuff well before a single line of code has been written.',
   'Software is a team sport. Focus should be on rising the tide for everyone, not pinpointing and leaning into your star players.',
   'Micro-optimizations are almost always a fools errand that miss the bigger picture.',
   'All process implementations should be about offloading cognitive load. When done right- it enables freedom, not control.',
   'Test it. Then automate the test. Then test the tests.',
   'You dont have to know how NAND gates work but understanding the basics of how things operate a couple layers closer to the metal is valuable.',
   'YAGNI / KISS',
   'Estimates are almost always wrong. Projections based on past performance are infinitely better.',
   'Code reviews can be a ridiculously useful tool for learning. Smiting those opportunities does a disservice to everyone.',
   'Everything learned (including everything in this list!) should be challenged for accuracy and relevance indefinitely.',
];

// Tech
export interface ICommandLineColumn {
   heading?: string;
   values: JSX.Element[];
}
export const commandLineSections: ICommandLineColumn = {
   values: [<span>Languages</span>, <span>Frameworks</span>, <span>Libraries</span>],
};
export const commandLineFrontend: ICommandLineColumn = {
   heading: 'Frontend',
   values: [
      <span>
         CSS, HTML, <span css={accentColorCss}>JavaScript</span>,{' '}
         <span css={accentColorCss}>TypeScript</span>
      </span>,
      <span>
         AngularJS, <span css={accentColorCss}>Bootstrap</span>, Canvas, Electron, Knockout.js,{' '}
         <span css={accentColorCss}>React</span>, Vue.js
      </span>,
      <span>
         Context API, <span css={accentColorCss}>date-fns</span>,{' '}
         <span css={accentColorCss}>Emotion</span>, jQuery, <span css={accentColorCss}>Lodash</span>
         , Material, Moment.js, Redux, SCSS
      </span>,
   ],
};
export const commandLineBackend: ICommandLineColumn = {
   heading: 'Backend',
   values: [
      <span>C#, Python</span>,
      <span>
         Entity Framework, .NET, <span css={accentColorCss}>.NET Core</span>
      </span>,
      <span>
         <span css={accentColorCss}>Dapper</span>, SignalR
      </span>,
   ],
};
export const commandLinePlanning: ICommandLineColumn = {
   heading: 'Planning',
   values: [<span>Azure DevOps, Jira, Figma</span>],
};
export const commandLineBuilding: ICommandLineColumn = {
   heading: 'Building',
   values: [
      <span>
         Webpack, <span css={accentColorCss}>Prettier</span>, ESLint
      </span>,
   ],
};
export const commandLineTesting: ICommandLineColumn = {
   heading: 'Testing',
   values: [
      <span>
         BrowserStack, <span css={accentColorCss}>Selenium</span>, Jest
      </span>,
   ],
};
export const commandLineDatabase: ICommandLineColumn = {
   heading: 'Database',
   values: [<span>SQL Server, Cosmos</span>],
};

// Experience
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
      companyLabel: <FontAwesomeIcon icon={faPlane} />,
      companyFullName: 'Sabbatical',
      title: 'Freelancer / Transient',
      startYear: 2018,
      endYear: 2019,
      description: (
         <CustomUl>
            <CustomLi>
               Learned and built projects with modern frontend frameworks Angular, React, and Vue.
            </CustomLi>
            <CustomLi>Learned Canvas and FabricJS.</CustomLi>
            <CustomLi>Various freelance / side jobs earning literally 10's of dollars.</CustomLi>
            <CustomLi>Assisted in duck handling at a remote duck sanctuary (no, really).</CustomLi>
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

// Projects
export interface IProjectContainer {
   imageUrl: string;
   websiteUrl?: string;
   sourceUrl?: string;
   title: string;
   copy: string;
}
export const projectList: IProjectContainer[] = [
   {
      imageUrl: QuiltiImage,
      websiteUrl: 'http://quilti.net/',
      sourceUrl: 'https://github.com/hobblyhoy/Quilti',
      title: 'Quilti',
      copy: 'A user driven image collection site where anyone can contribute to an infinite quilt of artworks. This was built using React and utilizes the Canvas and Fabric.js libraries. This project is heavily cached at all layers and a lot of trade-off analysis in order for it to work with my limited hosting resources.',
   },
   {
      imageUrl: PingTrackImage,
      sourceUrl: 'https://github.com/hobblyhoy/PingTrack',
      title: 'PingTrack',
      copy: 'A standalone desktop application built using Electron and React. It allows constant ping responses charted to an unlimited number of hosts. This project gave me familiarity with Electron and TypeScript as well as a deeper understanding of Material.',
   },
   {
      imageUrl: LmoImage,
      websiteUrl: 'https://letsmeeton.com/',
      title: "Let's Meet On",
      copy: 'A web app to take a group of people’s schedules and display the times when everyone is available. Designed mobile responsive using Bootstrap with Vue.js for the frontend and ASP.NET with Entity Framework on the backend. Additionally, uses SignalR for chat, SendGrid for email API, and Moment.js.',
   },
   {
      imageUrl: CommForwardImage,
      websiteUrl: 'https://hobblyhoy.github.io/CommForward/',
      sourceUrl: 'https://github.com/hobblyhoy/CommForward',
      title: 'Comm Forward',
      copy: 'A minimalist app to communicate needs and feelings. Created for my grandfather who had fallen ill and had difficulty speaking. Features a simple to use, tablet-friendly design and a customizable interface.',
   },
   {
      imageUrl: PortfolioImage,
      websiteUrl: window.location.href, // LOL
      sourceUrl: 'https://github.com/hobblyhoy/portfolio',
      title: 'Portfolio',
      copy: 'You know this one! Built with React and Typescript with a little Lodash and Font Awesome sprinkled in. Animations, typography, design, etc are all home grown. Curious how I did the thing with my face? Check out the source!',
   },
];
