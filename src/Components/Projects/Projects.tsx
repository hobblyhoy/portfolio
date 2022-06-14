import { IProjectContainer, projectList } from '../../store';
import ContentBlock from '../SharedComponents/ContentBlock';
import ProjectContainer from './ProjectContainer';

function Projects() {
   return (
      <ContentBlock title="Projects" id="projects">
         {projectList.map((project: IProjectContainer, index: number) => (
            <div key={index}>
               <ProjectContainer {...project} />
            </div>
         ))}
      </ContentBlock>
   );
}

export default Projects;
