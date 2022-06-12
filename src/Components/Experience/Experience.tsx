import { IWorkDetails, workDetailsList } from '../../store';
import ContentBlock from '../SharedComponents/ContentBlock';
import { SetStateAction, useState } from 'react';
import ExperienceTimeline from './ExperienceTimeline';
import ExperienceDescription from './ExperienceDescription';

function Experience() {
   const [selectedWorkDetails, setSelectedWorkDetails] = useState(workDetailsList[3]);

   return (
      <ContentBlock title="XP" id="experience">
         <div>
            <ExperienceTimeline
               selectedWorkDetails={selectedWorkDetails}
               clickHandler={(workDetails: SetStateAction<IWorkDetails>) =>
                  setSelectedWorkDetails(workDetails)
               }
            />
            <ExperienceDescription selectedWorkDetails={selectedWorkDetails} />
         </div>
      </ContentBlock>
   );
}
export default Experience;
