/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
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
               <CustomLi>
                  Figure out the hard stuff well before a single line of code has been written.
               </CustomLi>
               <CustomLi>
                  You dont have to understand how NAND gates work but the lower down the tech stack
                  you understand the better.
               </CustomLi>
               <CustomLi>
                  Software is a team sport. Focus should be on rising the tide for everyone, not
                  pinpointing and leaning into your star players.
               </CustomLi>
               <CustomLi>
                  Micro-optimizations are almost always a fools errand that miss the bigger picture.
               </CustomLi>
               <CustomLi>
                  All process implementations should be about offloading cognitive load. When done
                  right- it enables freedom, not control.
               </CustomLi>
               <CustomLi>Test it. Then automate the test. Then test the tests.</CustomLi>
               <CustomLi>YAGNI</CustomLi>
               <CustomLi>
                  Estimates are almost always wrong. Projections based on past performance are
                  infinitely better.
               </CustomLi>
               <CustomLi>
                  Code reviews can be a ridiculously useful tool for learning. Smiting those
                  opportunities does a disservice to everyone.
               </CustomLi>
               <CustomLi>
                  Everything learned (including everything in this list!) should be challenged for
                  accuracy and relevance indefinitely.
               </CustomLi>
            </CustomUl>
            <p css={end}>
               That only scratches the surface but I love chatting about this stuff so let's talk!
            </p>
         </div>
      </ContentBlock>
   );
}

export default AboutMe;
