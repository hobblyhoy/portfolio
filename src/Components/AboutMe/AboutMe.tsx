/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { aboutMeList } from '../../copy';
import ContentBlock from '../SharedComponents/ContentBlock';
import CustomLi from '../SharedComponents/CustomLi';
import CustomUl from '../SharedComponents/CustomUl';

function AboutMe() {
   const begin = css`
      margin-top: 0;
   `;
   const end = css`
      margin-bottom: 0;
   `;

   return (
      <ContentBlock title="About Me" id="about-me">
         <div>
            <p css={begin}>
               I'm a self-taught, self-driven, self-less engineer who cares most about creating a
               killer user experience with the best, cleanest code I can. I have a penchant for the
               atypical, a slathering of well-structured process, oodles of creativity, and a
               liberal license with the english language. I believe that curiosity, exploration, and
               personal growth fill in the gap between a good developer and a great one.
            </p>
            <p>
               I don't subscribe to all the credo's of software development but there are some
               lessons I keep close to heart:
            </p>
            <CustomUl>
               {aboutMeList.map(li => <CustomLi>{li}</CustomLi>)}
            </CustomUl>
            <p css={end}>
               That only scratches the surface but I love chatting about this stuff so let's talk!
            </p>
         </div>
      </ContentBlock>
   );
}

export default AboutMe;
