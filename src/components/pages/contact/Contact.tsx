import useMediaQuery from "../../../hooks/useMediaQuery";
import PageHeader from "../../atoms/pageHeader/PageHeader";
import ContactContainer from "../../elements/contactContainer/ContactContainer";
import { ContactPageContainer } from "./contactStyle";

const Contact = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ContactPageContainer >
      <PageHeader headerText="wanna contact me?" />
      <ContactContainer isMobile={isMobile} />
    </ContactPageContainer>
  );
};

export default Contact;
