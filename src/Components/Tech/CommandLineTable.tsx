import { unzip } from 'lodash';
import { Fragment } from 'react';
import { ICommandLineColumn } from '../../copy';

// Note: I have no need for mismatched column lengths so I'm not going to add support for them.
interface IProps {
   columns: ICommandLineColumn[];
   showHeadings: boolean;
}
function CommandLineTable({ columns, showHeadings }: IProps) {
   // The cleanest way for us to represent our data is in columns but unfortunately <table>s
   // operate a row at a time. So lets transpose our columns into some output-ready rows.

   let headingRow: string[] = [];
   let headingRowUnderline: string[] = [];

   if (showHeadings) {
      columns.forEach(column => {
         headingRow.push(column.heading ?? '');
         headingRowUnderline.push(column.heading ? '-'.repeat(column.heading.length) : '');
      });
   }

   let contentRows = unzip(columns.map(x => x.values));

   return (
      <table>
         <tbody>
            {showHeadings && (
               <Fragment>
                  <tr>
                     {headingRow.map(x => (
                        <th>{x}</th>
                     ))}
                  </tr>
                  <tr>
                     {headingRowUnderline.map(x => (
                        <th>{x}</th>
                     ))}
                  </tr>
               </Fragment>
            )}
            {contentRows.map(row => (
               <tr>
                  {row.map(x => (
                     <td>{x}</td>
                  ))}
               </tr>
            ))}
         </tbody>
      </table>
   );
}

export default CommandLineTable;
