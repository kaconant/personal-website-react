import PageHeader from "@/components/atoms/PageHeader/PageHeader";
import ProjectContainer from "@/components/blocks/ProjectsContainer/ProjectContainer";
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
