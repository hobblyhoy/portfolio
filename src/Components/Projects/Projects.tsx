import ContentBlock from '../SharedComponents/ContentBlock';
import ProjectContainer from './ProjectContainer';
import LmoImage from '../../Assets/lmo2.png';

function Projects() {
   return (
      <ContentBlock title="Projects" id="projects">
         <ProjectContainer imageUrl={LmoImage} title="Let's Meet On" copy="Hello!" />
      </ContentBlock>
   );
}

export default Projects;
