import useMediaQuery from "../../../hooks/useMediaQuery";
import PageHeader from "../../atoms/pageHeader/PageHeader";

const Projects = () => {
  //const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <PageHeader
      headerText="look ma, I build things"
      subheaderText="including everything you behold on this website"
    />
  );
};

export default Projects;
