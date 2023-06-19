import useMediaQuery from "../../../hooks/useMediaQuery";
import PageHeader from "../../atoms/pageHeader/PageHeader";

import Tallulah from "../../../assets/photos/self/Tallulah.jpg";
import { NotFoundContainer, NotFoundImage } from "./notFoundStyle";

const NotFound = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <NotFoundContainer>
      <PageHeader
        headerText="path less traveled, eh?"
        subheaderText="you've discovered my 404 page (and tallulah)"
      />
      <NotFoundImage src={Tallulah} alt="krissy" />
    </NotFoundContainer>
  );
};

export default NotFound;
