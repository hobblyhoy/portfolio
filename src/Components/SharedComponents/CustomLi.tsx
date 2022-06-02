/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { accentColor } from '../../store';

interface IProps {
   children: string | JSX.Element;
}
function CustomLi({children}: IProps) {
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
}

export default CustomLi;
