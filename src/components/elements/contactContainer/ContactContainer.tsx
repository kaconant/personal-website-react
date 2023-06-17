import { FC } from "react";
import {
  ContactCard,
  ContactInfo,
  ContactLinks,
} from "./contactContainerStyle";

import Link from "../../atoms/link/Link";
import Resume from "../../../assets/pdf/KrissyConantResume2023.pdf";

type ContactContainerProps = {
  isMobile: boolean;
};

const ContactContainer: FC<ContactContainerProps> = ({ isMobile }) => {
  return (
    <ContactCard isMobile={isMobile}>
      <ContactLinks isMobile={isMobile}>
        <ContactInfo>
          linkedIn
          <Link
            href="https://www.linkedin.com/in/krissy-conant/"
            linkContent="krissy-conant"
          />
        </ContactInfo>
        <ContactInfo>
          email
          <Link
            href="mailto:krissyconant@gmail.com"
            linkContent="krissyconant@gmail.com"
          />
        </ContactInfo>
        <ContactInfo>
          github
          <Link href="https://github.com/kaconant" linkContent="kaconant" />
        </ContactInfo>
      </ContactLinks>

      <Link href={Resume} theme="button" linkContent="Check out my resume" />
    </ContactCard>
  );
};

export default ContactContainer;
