import { FC } from "react";
import { ContactCard, ContactLinks } from "./contactContainerStyle";
import cryptoRandomString from "crypto-random-string";

import Link from "../../atoms/link/Link";
import Resume from "../../../assets/pdf/KrissyConantResume2023.pdf";
import ImageLink from "../../atoms/imageLink/ImageLink";

import LinkedIn from "../../../assets/icons/linkedin.svg";
import GitHub from "../../../assets/icons/github.svg";
import Email from "../../../assets/icons/email.svg";
import Folder from "../../../assets/icons/folder.svg";

const ContactContainer: FC = () => {
  const ContactImageLinks = [
    {
      id: cryptoRandomString({ length: 10 }),
      href: "https://www.linkedin.com/in/krissy-conant/",
      imgSrc: LinkedIn,
      tooltip: "LinkedIn",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      href: "https://github.com/kaconant",
      imgSrc: GitHub,
      tooltip: "GitHub",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      href: "mailto:krissyconant@gmail.com",
      imgSrc: Email,
      tooltip: "Email",
    },
    {
      id: cryptoRandomString({ length: 10 }),
      href: "https://krissy-conant.notion.site/00cfc96784af43c1931cf3341e21ef7f?v=712e36f87c45461581e7f60da2837c90&pvs=4",
      imgSrc: Folder,
      tooltip: "Personal Wiki",
    },
  ];

  return (
    <ContactCard>
      <ContactLinks>
        {ContactImageLinks.map((contactImageLink) => (
          <ImageLink
            key={contactImageLink.id}
            href={contactImageLink.href}
            imgSrc={contactImageLink.imgSrc}
            tooltip={contactImageLink.tooltip}
          />
        ))}
      </ContactLinks>
      <Link href={Resume} theme="button" linkContent="Check out my resume" />
    </ContactCard>
  );
};

export default ContactContainer;
