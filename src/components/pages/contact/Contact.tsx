import useMediaQuery from "@/hooks/useMediaQuery";

import Tallulah from "@/assets/photos/self/Tallulah.jpg";

import PageHeader from "@/components/atoms/PageHeader";
import ContactContainer from "@/components/blocks/ContactContainer/ContactContainer";

import {
  ContactContent,
  ContactImage,
  ContactPageContainer,
} from "./contactStyle";

const Contact = () => {
  const isNarrow = useMediaQuery("(max-width: 900px)");

  return (
    <ContactPageContainer aria-label="Contact Page">
      <PageHeader
        headerText="contact me"
        subheaderText="for work or tallulah photos - dealer's choice"
      />
      <ContactContent
        isNarrow={isNarrow}
        aria-label="Contact Information Section"
      >
        <ContactContainer isNarrow={isNarrow} />
        <ContactImage src={Tallulah} alt="picture of krissy" />
      </ContactContent>
    </ContactPageContainer>
  );
};

export default Contact;
