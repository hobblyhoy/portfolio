/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { accentColor } from '../utils';
import ContentBlock from './ContentBlock';

function AboutMe() {
   const begin = css`
      margin-top: 0;
   `;
   const end = css`
      margin-bottom: 0;
   `;

   const CustomLi = ({ children }: { children: JSX.Element }) => {
      const liCss = css`
         display: flex;
         line-height: 1.3;
         margin-bottom: 10px;
      `;
      const iconCss = css`
         margin-top: 5px;
         margin-right: 10px;
         color: ${accentColor};
         font-size: 15px;
      `;

      return (
         <li css={liCss}>
            <FontAwesomeIcon icon={faAngleRight} css={iconCss} />
            {children}
         </li>
      );
   };

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
            <ul className="fa-ul" css={css`margin-left: 20px;`}>
               <CustomLi>
                  <span>
                     Figure out the hard stuff well before a single line of code has been written.
                  </span>
               </CustomLi>
               <CustomLi>
                  <span>
                     You dont have to understand how NAND gates work but the lower down the tech
                     stack you understand the better.
                  </span>
               </CustomLi>
               <CustomLi>
                  <span>
                     Software is a team sport. Focus should be on rising the tide for everyone, not
                     pinpointing and leaning into your star players.
                  </span>
               </CustomLi>
               <CustomLi>
                  <span>
                     Micro-optimizations are almost always a fools errand that miss the bigger
                     picture.
                  </span>
               </CustomLi>
               <CustomLi>
                  <span>
                     All process implementations should be about offloading cognitive load. When
                     done right- it enables freedom, not control.
                  </span>
               </CustomLi>
               <CustomLi>
                  <span>Test it. Then automate the test. Then test the tests.</span>
               </CustomLi>
               <CustomLi>
                  <span>YAGNI</span>
               </CustomLi>
               <CustomLi>
                  <span>
                     Estimates are almost always wrong. Projections based on past performance are
                     infinitely better.
                  </span>
               </CustomLi>
               <CustomLi>
                  <span>
                     Code reviews can be a ridiculously useful tool for learning. Smiting those
                     opportunities does a disservice to everyone.
                  </span>
               </CustomLi>
               <CustomLi>
                  <span>
                     Everything I learn and believe (including everything in this list!) is
                     continuously challenged for accuracy and relevance as I grow.
                  </span>
               </CustomLi>
            </ul>
            <p css={end}>
               That only scratches the surface but I love chatting about this stuff so let's talk!
            </p>
         </div>
      </ContentBlock>
   );
}

export default AboutMe;
