import { FC } from "react";
import { LinkElement } from "./linkStyle";

type ImageLinkProps = {
  href: string;
  imgSrc: string;
};

const ImageLink: FC<ImageLinkProps> = ({ href, imgSrc }) => {
  return (
    <>
      <LinkElement href={href} target="_blank" rel="noreferrer">
        <img src={imgSrc} alt="icon" />
      </LinkElement>
    </>
  );
};

export default ImageLink;
