import PageHeader from "../../atoms/pageHeader/PageHeader";
import ProjectContainer from "../../elements/projectsContainer/ProjectContainer";
import { ProjectsSection } from "./projectsStyle";

const Projects = () => {
  return (
    <ProjectsSection aria-label="Project Page">
      <PageHeader
        headerText="look ma, I build things"
        subheaderText="including this website"
      />
      <ProjectContainer />
    </ProjectsSection>
  );
};

export default Projects;
