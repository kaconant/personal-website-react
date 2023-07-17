import PageHeader from "../../atoms/pageHeader/PageHeader";

import { NotFoundContainer } from "./notFoundStyle";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <PageHeader
        headerText="path less traveled, eh?"
        subheaderText="congrats ~ you've discovered my 404 page!"
      />
    </NotFoundContainer>
  );
};

export default NotFound;
