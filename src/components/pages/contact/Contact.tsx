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
  const isNarrow = useMediaQuery("(max-width: 900px)");

  return (
    <ContactPageContainer>
      <PageHeader
        headerText="contact me"
        subheaderText="for work or tallulah photos - dealer's choice"
      />
      <ContactContent isNarrow={isNarrow}>
        <ContactContainer isNarrow={isNarrow} />
        <ContactImage
          width={340}
          height={340}
          src={Tallulah}
          alt="picture of krissy"
        />
      </ContactContent>
    </ContactPageContainer>
  );
};

export default Contact;
