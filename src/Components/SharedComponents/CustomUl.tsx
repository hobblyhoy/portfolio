/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

interface IProps {
   children: JSX.Element[];
}
function CustomUl({ children }: IProps) {
   return (
      <ul
         className="fa-ul"
         css={css`
            margin-left: 20px;
         `}
      >
         {children}
      </ul>
   );
}

export default CustomUl;
