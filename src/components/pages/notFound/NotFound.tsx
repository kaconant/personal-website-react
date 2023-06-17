import useMediaQuery from "../../../hooks/useMediaQuery";
import PageHeader from "../../atoms/pageHeader/PageHeader";

const NotFound = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <PageHeader
      headerText="ahh - path less traveled, eh?"
      subheaderText="congrats on discovering my 404 page"
    />
  );
};

export default NotFound;
