import { FC } from "react";
import { LinkElement, LinkImage } from "./linkStyle";
import { PlacesType, Tooltip } from "react-tooltip";

type ImageLinkProps = {
  href: string;
  imgSrc: string;
  tooltip: string;
  tooltipPlacement?: PlacesType;
};

const ImageLink: FC<ImageLinkProps> = ({
  href,
  imgSrc,
  tooltip,
  tooltipPlacement = "top",
}) => {
  return (
    <>
      <LinkElement
        data-tooltip-id={tooltip}
        data-tooltip-content={tooltip}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <LinkImage src={imgSrc} alt="icon" />
      </LinkElement>
      <Tooltip
        id={tooltip}
        place={tooltipPlacement}
        border={"1px solid var(--midOrange)"}
        style={{
          backgroundColor: "var(--lightOrange)",
          color: "var(--black)",
        }}
      />
    </>
  );
};

export default ImageLink;
