import PageHeader from "@/components/atoms/HeaderCard";
import ProjectContainer from "@/components/blocks/ProjectsContainer";
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
