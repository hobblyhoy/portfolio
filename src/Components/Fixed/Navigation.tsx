/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMediaQuery from '../../CustomHooks/useMediaQuery';
import { accentColor, accentLinkHoverCss, boringColor, collapsedHeaderHeight } from '../../store';

interface IProps {
   mobileNavIsOpen: boolean;
   setMobileNavIsOpen: Function;
}
function Navigation({ mobileNavIsOpen, setMobileNavIsOpen }: IProps) {
   const isMobile = useMediaQuery('(max-width: 768px)');

   const base = css`
      width: 50%;
   `;

   const desktopNavCss = css`
      margin-left: 20px;
      color: ${boringColor};
      display: flex;
      align-items: center;
   `;

   const mobileBurgerMenuCss = css`
      margin-top: 15px;
      margin-left: 15px;
      padding: 10px;
      cursor: pointer;
      font-size: 25px;
   `;

   const mobileNavCss = css`
      color: ${boringColor};
      opacity: ${mobileNavIsOpen ? 1 : 0};
      transition: opacity 3s;
      margin-top: 20px;
      margin-left: 80px;
      font-size: 50px;
      line-height: 2;
      visibility: ${mobileNavIsOpen ? 'unset' : 'hidden'};
   `;

   const scrollTo = (sectionId: string) => {
      setMobileNavIsOpen(false);

      // Get distance down the page
      const topOfSection =
         window.pageYOffset + document.getElementById(sectionId)!.getBoundingClientRect().top;

      // allow for header
      window.scrollTo({
         top: topOfSection - collapsedHeaderHeight,
         behavior: 'smooth',
      });
   };

   return isMobile ? (
      <div css={base}>
         <div
            css={mobileBurgerMenuCss}
            onClick={() => setMobileNavIsOpen((current: boolean) => !current)}
         >
            <FontAwesomeIcon icon={faBars} />
         </div>
         <div css={mobileNavCss} aria-hidden={!mobileNavIsOpen}>
            <div
               css={css`
                  margin-left: -50px;
               `}
            >
               [
            </div>
            <div>
               <a onClick={() => scrollTo('about-me')} css={accentLinkHoverCss}>
                  About&nbsp;Me
               </a>
               ,
            </div>
            <div>
               <a onClick={() => scrollTo('tech')} css={accentLinkHoverCss}>
                  Tech
               </a>
               ,
            </div>
            <div>
               <a onClick={() => scrollTo('experience')} css={accentLinkHoverCss}>
                  Experience
               </a>
               ,
            </div>
            <div>
               <a onClick={() => scrollTo('projects')} css={accentLinkHoverCss}>
                  Projects
               </a>
            </div>
            <div
               css={css`
                  margin-left: -50px;
               `}
            >
               ]
            </div>
         </div>
      </div>
   ) : (
      <div css={desktopNavCss}>
         [&nbsp;&nbsp;
         <a onClick={() => scrollTo('about-me')} css={accentLinkHoverCss}>
            About Me
         </a>
         ,&nbsp;&nbsp;
         <a onClick={() => scrollTo('tech')} css={accentLinkHoverCss}>
            Tech
         </a>
         ,&nbsp;&nbsp;
         <a onClick={() => scrollTo('experience')} css={accentLinkHoverCss}>
            Experience
         </a>
         ,&nbsp;&nbsp;
         <a onClick={() => scrollTo('projects')} css={accentLinkHoverCss}>
            Projects
         </a>
         &nbsp;&nbsp;]
      </div>
   );
}

export default Navigation;
