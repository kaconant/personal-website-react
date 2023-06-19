import { FC } from "react";
import {
  ContactCard,
  ContactLinks,
} from "./contactContainerStyle";

import Link from "../../atoms/link/Link";
import Resume from "../../../assets/pdf/KrissyConantResume2023.pdf";
import ImageLink from "../../atoms/imageLink/ImageLink";

import LinkedIn from "../../../assets/icons/linkedin.svg";
import GitHub from "../../../assets/icons/github.svg";
import Email from "../../../assets/icons/email.svg";

const ContactContainer: FC = () => {
  return (
    <ContactCard>
      <ContactLinks>
        <ImageLink
          href="https://www.linkedin.com/in/krissy-conant/"
          imgSrc={LinkedIn}
        />
        <ImageLink href="https://github.com/kaconant" imgSrc={GitHub} />
        <ImageLink href="mailto:krissyconant@gmail.com" imgSrc={Email} />
      </ContactLinks>

      <Link href={Resume} theme="button" linkContent="Check out my resume" />
    </ContactCard>
  );
};

export default ContactContainer;
