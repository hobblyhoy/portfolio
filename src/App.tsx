/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import './App.css';
import ContentBlock from './Components/ContentBlock';
import FaceManager from './Components/FaceManager';
import Header from './Components/Header';
import { accentColor } from './utils';

function App() {
   return (
      <div className="App">
         <Header />

         <div
            css={css`
               display: flex;
               justify-content: center;
               align-items: center;
               margin-top: 200px;
            `}
         >
            <div css={css`margin-right: 20px;`}>
               <div
                  css={css`
                     font-size: 36px;
                  `}
               >
                  Welcome!
               </div>
               <div>
                  My name is{' '}
                  <span
                     css={css`
                        color: ${accentColor};
                     `}
                  >
                     Nathan Rooke
                  </span>
               </div>
               <div>I build stuff for the web</div>
            </div>
            <div style={{ width: '300px', height: '240px' }}>
               <FaceManager />
            </div>
         </div>

         <div style={{marginTop: 200}}>
            <ContentBlock title="About Me">
               <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
            </ContentBlock>
         </div>
      </div>
   );
}

export default App;
