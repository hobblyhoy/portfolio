/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { accentLinkHover, backgroundColor, boringColor, primaryLinkHover } from '../utils';

function Header() {
   const base = css`
      position: fixed;
      top: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 70px;
      background-color: ${backgroundColor};
      box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.25);
   `;

   return (
      <div css={base}>
         <Navigation />
         <ContactMeBox />
      </div>
   );
}
export default Header;

//// Navigation Component \\\\
function Navigation() {
   const navCss = css`
      margin-top: 20px;
      margin-left: 20px;
      color: ${boringColor};
   `;

   return (
      <div css={navCss}>
         [&nbsp;&nbsp;
         <a href="#about-me" css={accentLinkHover}>
            About Me
         </a>
         ,&nbsp;&nbsp;
         <a href="#about-me" css={accentLinkHover}>
            Tech
         </a>
         ,&nbsp;&nbsp;
         <a href="#about-me" css={accentLinkHover}>
            Experience
         </a>
         ,&nbsp;&nbsp;
         <a href="#about-me" css={accentLinkHover}>
            Projects
         </a>
         &nbsp;&nbsp;]
      </div>
   );
}

//// ContactMe Component \\\\
function ContactMeBox() {
   const [isHovered, setIsHovered] = useState(false);

   const contactMeBoxCss = css`
      padding: 20px;
      top: 0px;
      right: 0px;
      min-width: 150px;
   `;

   const sharedCss = css`
      transition-property: top, opacity;
      transition-duration: 0.5s;
      position: absolute;
   `;

   const contactMeTextCss = css`
      ${sharedCss}
      right: 20px;
      top: ${isHovered ? '-30px' : '20px'};
      opacity: ${isHovered ? 0 : 1};
   `;

   const contactMeActionsCss = css`
      ${sharedCss}
      right: 20px;
      top: ${isHovered ? '20px' : '-30px'};
      opacity: ${isHovered ? 1 : 0};
   `;

   return (
      <div
         css={contactMeBoxCss}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <div css={contactMeTextCss} aria-hidden="true">
            Contact
         </div>
         <div css={contactMeActionsCss}>
            <a target="_blank" href="mailto:nrooke42@igrad.com" aria-label="Contact by email">
               <FontAwesomeIcon
                  icon={faEnvelope}
                  css={css`
                     ${primaryLinkHover} font-size: 30px;
                  `}
               />
            </a>
            <a
               target="_blank"
               href="https://www.linkedin.com/in/nrooke42/"
               aria-label="My LinkedIn profile"
            >
               <FontAwesomeIcon
                  icon={faLinkedin}
                  css={css`
                     ${primaryLinkHover}
                     font-size: 30px;
                     margin-left: 15px;
                  `}
               />
            </a>
         </div>
      </div>
   );
}
