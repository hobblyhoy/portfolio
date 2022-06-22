/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { primaryLinkHoverCss } from '../../store';

function ContactMeBox() {
   const [isHovered, setIsHovered] = useState(false);

   const contactMeBoxCss = css`
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 20px;
      padding-right: 40px;
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
      right: 40px;
      top: ${isHovered ? '-30px' : '25px'};
      opacity: ${isHovered ? 0 : 1};
   `;

   const contactMeActionsCss = css`
      ${sharedCss}
      right: 40px;
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
                     ${primaryLinkHoverCss} font-size: 30px;
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
                     ${primaryLinkHoverCss}
                     font-size: 30px;
                     margin-left: 15px;
                  `}
               />
            </a>
         </div>
      </div>
   );
}

export default ContactMeBox;