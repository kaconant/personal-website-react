import { FC } from "react";
import {
  ContactCard,
  ContactLinks,
  ImageLinkContainer,
} from "./contactContainerStyle";
import cryptoRandomString from "crypto-random-string";

import Link from "@/components/atoms/Link";
import Resume from "@/assets/pdf/src/assets/pdf/KrissyConant-Resume-2025.pdf";
import ImageLink from "@/components/atoms/ImageLink";

import LinkedIn from "@/assets/icons/linkedin.svg";
import GitHub from "@/assets/icons/github.svg";
import Email from "@/assets/icons/email.svg";
import Folder from "@/assets/icons/folder.svg";

type ContactContainerProps = {
  isNarrow: boolean;
};

const ContactContainer: FC<ContactContainerProps> = ({ isNarrow }) => {
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
    <ContactCard isNarrow={isNarrow} aria-label="Contact Link Section">
      <ContactLinks>
        {ContactImageLinks.map((contactImageLink) => (
          <ImageLinkContainer key={contactImageLink.id}>
            <ImageLink
              href={contactImageLink.href}
              imgSrc={contactImageLink.imgSrc}
              tooltip={contactImageLink.tooltip}
            />
          </ImageLinkContainer>
        ))}
      </ContactLinks>
      <Link href={Resume} theme="button" linkContent="Check out my resume" />
    </ContactCard>
  );
};

export default ContactContainer;
