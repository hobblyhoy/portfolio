/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { IProjectContainer, projectList } from '../../store';
import ContentBlock from '../SharedComponents/ContentBlock';
import ProjectContainer from './ProjectContainer';

function Projects() {
   const margin = css`
      margin-top: 40px;
   `;

   return (
      <ContentBlock title="Projects" id="projects">
         {projectList.map((project: IProjectContainer, index: number) => (
            <div key={index} css={margin}>
               <ProjectContainer {...project} />
            </div>
         ))}
      </ContentBlock>
   );
}

export default Projects;
