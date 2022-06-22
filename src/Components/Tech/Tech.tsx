/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { Fragment } from 'react';
import {
   commandLineBackend,
   commandLineBuilding,
   commandLineDatabase,
   commandLineFrontend,
   commandLinePlanning,
   commandLineSections,
   commandLineTesting,
} from '../../copy';
import useMediaQuery from '../../CustomHooks/useMediaQuery';
import { accentColor, boringColorBright } from '../../store';
import ContentBlock from '../SharedComponents/ContentBlock';
import CommandLineTable from './CommandLineTable';

function Tech() {
   const isMobile = useMediaQuery('(max-width: 768px)');

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

   const keyframesHelper = keyframes`
      0% { opacity: 0; }
   `;
   const blinky = css`
      animation: ${keyframesHelper} 1.5s steps(2) infinite;
   `;

   return (
      <ContentBlock title="Tech" id="tech">
         <div>
            <div>
               The most fun work is thinking through and building UI/UX. But heres some other tech I
               know and <span css={accentCss}>particularly like</span>...
            </div>
            <div css={commandLineCss}>
               {isMobile ? (
                  <Fragment>
                     <div css={enteredCommandCss}>{'>'} get-tech --Frontend</div>
                     <CommandLineTable
                        columns={[commandLineSections, commandLineFrontend]}
                        showHeadings={false}
                     />
                     <div css={enteredCommandCss}>{'>'} get-tech --Backend</div>
                     <CommandLineTable
                        columns={[commandLineSections, commandLineBackend]}
                        showHeadings={false}
                     />
                     <div css={enteredCommandCss}>{'>'} get-tech --Database</div>
                     <CommandLineTable columns={[commandLineDatabase]} showHeadings={false} />
                     <div css={enteredCommandCss}>{'>'} get-tech --Testing</div>
                     <CommandLineTable columns={[commandLineTesting]} showHeadings={false} />
                     <div css={enteredCommandCss}>{'>'} get-tech --Other</div>
                     <CommandLineTable
                        columns={[commandLinePlanning, commandLineBuilding]}
                        showHeadings={true}
                     />
                  </Fragment>
               ) : (
                  <Fragment>
                     <div css={enteredCommandCss}>{'>'} get-tech --Web</div>
                     <CommandLineTable
                        columns={[commandLineSections, commandLineFrontend, commandLineBackend]}
                        showHeadings={true}
                     />
                     <div css={enteredCommandCss}>{'>'} get-tech --Other</div>
                     <CommandLineTable
                        columns={[
                           commandLineDatabase,
                           commandLineTesting,
                           commandLinePlanning,
                           commandLineBuilding,
                        ]}
                        showHeadings={true}
                     />
                  </Fragment>
               )}
               <div css={enteredCommandCss}>
                  {'>'} <span css={blinky}>█</span>
               </div>
            </div>
         </div>
      </ContentBlock>
   );
}

export default Tech;
