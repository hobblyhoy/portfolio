/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { faAngleRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JsxEmit } from 'typescript';
import ContentBlock from './ContentBlock';

function AboutMe() {
   const begin = css`
      margin-top: 0;
   `;
   const end = css`
      margin-bottom: 0;
   `;

   const CustomLi = ({ children }: { children: JSX.Element }) => {
      return (
         <li>
            <FontAwesomeIcon
               icon={faAngleRight}
               css={css`
                  margin-right: 10px;
               `}
            />
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
            <ul className="fa-ul">
               <CustomLi>
                  <span>
                     {/* TODO figure out how to make this <></> */}
                     Figure out the hard stuff well before a single line of code has been written. 
                  </span>
               </CustomLi>
               <li>
                  You dont have to understand how NAND gates work but the lower down the tech stack
                  you understand the better.
               </li>
               <li>
                  Software is a team sport. Focus should be on rising the tide for everyone, not
                  pinpointing and leaning into your star players.
               </li>
               <li>
                  Micro-optimizations are almost always a fools errand that miss the bigger picture.
               </li>
               <li>
                  All process implementations should be about offloading cognitive load. When done
                  right, it enables freedom, not control.
               </li>
               <li>Test it. Then automate the test. Then test the tests.</li>
               <li>YAGNI</li>
               <li>
                  Estimates are almost always wrong. Projections based on past performance are
                  infinitely better.
               </li>
               <li>
                  Code reviews can be a ridiculously useful tool for learning. Smiting those
                  opportunities does a disservice to everyone.
               </li>
               <li>
                  Everything I learn and believe (including everything in this list!) is
                  continuously challenged for accuracy and relevance as I grow.
               </li>
            </ul>
            <p css={end}>
               That only scratches the surface but I love talking about this stuff so hit me up!
            </p>
         </div>
      </ContentBlock>
   );
}

export default AboutMe;