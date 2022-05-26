// TODO change these to some coordinate type object w/ an x/y
interface IProps {
   leftEyeX: number,
   leftEyeY: number,
   rightEyeX: number,
   rightEyeY: number
}

function Face({leftEyeX, leftEyeY, rightEyeX, rightEyeY}: IProps) {

   return (
      <svg version="1.0" viewBox="0 0 685.19 544.1" xmlns="http://www.w3.org/2000/svg">
         <g transform="translate(-33.604 -131.27)">
            <g transform="translate(-667.83 -76.947)">
               <g transform="matrix(1.4424 0 0 1.4956 -497.09 -431.57)">
                  <path
                     transform="translate(667.83 76.947)"
                     d="m638.12 532.73a237.51 181.9 0 1 1-475.03 0 237.51 181.9 0 1 1 475.03 0z"
                  />
                  <path
                     transform="matrix(.92296 0 0 .92296 702.54 116.87)"
                     d="m638.12 532.73a237.51 181.9 0 1 1-475.03 0 237.51 181.9 0 1 1 475.03 0z"
                     fill="#eee"
                  />
                  <g transform={`matrix(.80179 .5976 -.5976 .80179 ${557.39 + leftEyeX} ${-144.76 + leftEyeY})`}>
                     <rect transform="translate(667.83 76.947)" x={91.098} y="192.67" width="22.198" height="79.928" />
                     <rect transform="translate(667.83 76.947)" x="91.098" y="192.67" width="22.198" height="79.928" />
                     <rect transform="rotate(90)" x="298.49" y="-809.99" width="22.198" height="79.928" />
                  </g>
                  <g transform={`matrix(.65625 -.75455 .75455 .65625 ${427.42 + rightEyeX} ${941.99 + rightEyeY})`}>
                     <rect transform="translate(667.83 76.947)" x="91.098" y="192.67" width="22.198" height="79.928" />
                     <rect transform="translate(667.83 76.947)" x="91.098" y="192.67" width="22.198" height="79.928" />
                     <rect transform="rotate(90)" x="298.49" y="-809.99" width="22.198" height="79.928" />
                  </g>
                  <path d="m1057.6 739.34c45.7 7.94 95.2-7.69 110.5-34.87 6.9-12.33 5.6-24.94-2.1-35.77-22.5 15.62-59.1 22.97-93.5 16.99-24.9-4.33-43.5-14.8-52.9-27.84-7.4 5.13-13.2 11.14-17 17.87-15.29 27.19 9.4 55.69 55 63.62z" />
               </g>
            </g>
         </g>
      </svg>
   );
}

export default Face;
