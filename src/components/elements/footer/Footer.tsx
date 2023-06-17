import { FC } from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./footerStyle";

import Resume from "../../../assets/pdf/KrissyConantResume2023.pdf";
import ImageLink from "../../atoms/imageLink/ImageLink";

import LinkedIn from "../../../assets/icons/linkedin.svg";
import GitHub from "../../../assets/icons/github.svg";
import Email from "../../../assets/icons/email.svg";
import ResumeIcon from "../../../assets/icons/resume.svg";

type FooterProps = {
  isMobile: boolean;
};

const Footer: FC<FooterProps> = ({ isMobile }) => {
  return (
    <FooterContainer isMobile={isMobile}>
      <ImageLink
        href="https://www.linkedin.com/in/krissy-conant/"
        imgSrc={LinkedIn}
      />
      <ImageLink href="https://github.com/kaconant" imgSrc={GitHub} />
      <ImageLink href="mailto:krissyconant@gmail.com" imgSrc={Email} />
      <ImageLink href={Resume} imgSrc={ResumeIcon} />
    </FooterContainer>
  );
};

export default Footer;
