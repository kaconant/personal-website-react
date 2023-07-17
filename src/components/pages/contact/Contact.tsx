import useMediaQuery from "../../../hooks/useMediaQuery";

import Tallulah from "../../../assets/photos/self/Tallulah.jpg";

import PageHeader from "../../atoms/pageHeader/PageHeader";
import ContactContainer from "../../elements/contactContainer/ContactContainer";

import {
  ContactContent,
  ContactImage,
  ContactPageContainer,
} from "./contactStyle";

const Contact = () => {
  const isNarrow = useMediaQuery("(max-width: 1000px)");

  return (
    <ContactPageContainer>
      <PageHeader headerText="wanna contact me?" />
      <ContactContent isMobile={isNarrow}>
        <ContactContainer />
        <ContactImage isMobile={isNarrow} src={Tallulah} alt="krissy" />
      </ContactContent>
    </ContactPageContainer>
  );
};

export default Contact;
