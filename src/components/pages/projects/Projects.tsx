import PageHeader from "../../atoms/pageHeader/PageHeader";
import ProjectContainer from "../../elements/projectsContainer/ProjectContainer";
import { ProjectsSection } from "./projectsStyle";

const Projects = () => {
  //const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ProjectsSection>
      <PageHeader headerText="look ma, I build things" />
      <ProjectContainer />
    </ProjectsSection>
  );
};

export default Projects;
