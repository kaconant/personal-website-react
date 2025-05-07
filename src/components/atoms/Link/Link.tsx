import { FC } from "react";
import { LinkElement } from "./linkStyle";

type LinkProps = {
  href: string;
  linkContent?: string;
  theme?: string;
};

const Link: FC<LinkProps> = ({ href, linkContent, theme = "primary" }) => {
  return (
    <LinkElement href={href} theme={theme} target="_blank" rel="noreferrer">
      {linkContent}
    </LinkElement>
  );
};

export default Link;
