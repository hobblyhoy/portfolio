/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useState } from 'react';
import { backgroundColor, collapsedHeaderHeight } from '../utils';
import ContactMeBox from './ContactMe';
import Navigation from './Navigation';

function Header() {
   const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

   const base = css`
      position: fixed;
      top: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: ${mobileNavIsOpen ? '100%' : `${collapsedHeaderHeight}px`};
      transition: height 0.5s;
      background-color: ${backgroundColor};
      box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.25);
      z-index: 1;
   `;

   return (
      <div css={base} id="header">
         <Navigation setMobileNavIsOpen={setMobileNavIsOpen} mobileNavIsOpen={mobileNavIsOpen} />
         {!mobileNavIsOpen && <ContactMeBox />}
      </div>
   );
}

export default Header;
