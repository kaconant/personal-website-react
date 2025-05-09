import { FC } from "react";
import { SkipLinkElement } from "./SkipLinkStyle";

const SkipLink: FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("main-content");
    console.log("Skip link clicked", target);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      target.focus({ preventScroll: true });
    }
  };

  return (
    <SkipLinkElement href="#main-content" onClick={handleClick}>
      Skip to main content
    </SkipLinkElement>
  );
};

export default SkipLink;
