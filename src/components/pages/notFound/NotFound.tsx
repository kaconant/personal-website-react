import PageHeader from "../../atoms/pageHeader/PageHeader";

import Tallulah from "../../../assets/photos/self/Tallulah.jpg";
import { NotFoundContainer, NotFoundImage } from "./notFoundStyle";

const NotFound = () => {
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
