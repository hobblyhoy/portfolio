/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { accentColor, boringColor, boringColorBright } from '../utils';
import ContentBlock from './ContentBlock';

function Tech() {
   const commandLineCss = css`
      font-family: 'Consolas', monospace;
      font-size: 16px;
      text-align: left;
      background-color: #222222;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 5px;
      td {
         vertical-align: top;
         padding: 8px;
      }
      th {
         font-weight: unset;
         padding-left: 8px;
      }
   `;

   const accentCss = css`
      color: ${accentColor};
   `;

   const enteredCommandCss = css`
      margin-top: 25px;
      color: ${boringColorBright};
   `;

   return (
      <ContentBlock title="Tech" id="tech">
         <div>
            <div>
               The most fun stuff is thinking through and building UI/UX. But heres some other stuff
               I know and <span css={accentCss}>particularly like</span>...
            </div>
            <div css={commandLineCss}>
               <div css={enteredCommandCss}>{'>'} get-tech --Web</div>
               <table>
                  <tbody>
                     <tr>
                        <th></th>
                        <th>Frontend</th>
                        <th>Backend</th>
                     </tr>
                     <tr>
                        <th></th>
                        <th>--------</th>
                        <th>-------</th>
                     </tr>
                     <tr>
                        <td>Languages</td>
                        <td>
                           CSS, HTML, <span css={accentCss}>JavaScript</span>,{' '}
                           <span css={accentCss}>TypeScript</span>
                        </td>
                        <td>C#, Python</td>
                     </tr>
                     <tr>
                        <td>Frameworks</td>
                        <td>
                           AngularJS, <span css={accentCss}>Bootstrap</span>, Canvas, Electron,
                           Knockout.js, <span css={accentCss}>React</span>, Vue.js
                        </td>
                        <td>
                           Entity Framework, .NET, <span css={accentCss}>.NET Core</span>
                        </td>
                     </tr>
                     <tr>
                        <td>Libraries</td>
                        <td>
                           Context API, <span css={accentCss}>date-fns</span>,{' '}
                           <span css={accentCss}>Emotion</span>, jQuery,{' '}
                           <span css={accentCss}>Lodash</span>, Material, Moment.js, Redux, SCSS
                        </td>
                        <td>
                           <span css={accentCss}>Dapper</span>, SignalR
                        </td>
                     </tr>
                  </tbody>
               </table>
               <div css={enteredCommandCss}>{'>'} get-tech --Other</div>
               <table>
                  <tbody>
                     <tr>
                        <th>Planning</th>
                        <th>Building</th>
                        <th>Testing</th>
                     </tr>
                     <tr>
                        <th>--------</th>
                        <th>--------</th>
                        <th>-------</th>
                     </tr>
                     <tr>
                        <td>Azure DevOps, Jira</td>
                        <td>
                           Webpack, <span css={accentCss}>Prettier</span>, ESLint
                        </td>
                        <td>
                           BrowserStack, <span css={accentCss}>Selenium</span>, Jest
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </ContentBlock>
   );
}

export default Tech;
