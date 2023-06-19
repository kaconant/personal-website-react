import PageHeader from "../../atoms/pageHeader/PageHeader";
import ContactContainer from "../../elements/contactContainer/ContactContainer";
import { ContactPageContainer } from "./contactStyle";

const Contact = () => {
  return (
    <ContactPageContainer>
      <PageHeader headerText="wanna contact me?" />
      <ContactContainer />
    </ContactPageContainer>
  );
};

export default Contact;
