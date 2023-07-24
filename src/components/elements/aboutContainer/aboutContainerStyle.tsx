import styled from "styled-components/macro";
import { H3, H5 } from "../../textElements";

type AboutCardProps = {
  isNarrow: boolean;
};

export const AboutCard = styled.section<AboutCardProps>`
  display: flex;
  flex-direction: ${({ isNarrow }) => (isNarrow ? "column" : "row")};
  gap: 24px;
  padding: 20px;
  background: var(--grayscale2);
  border: 3px solid var(--grayscale4);
  border-radius: var(--standardBorderRadius);
  width: ${({ isNarrow }) => (isNarrow ? "100%" : "fit-content")};
  align-items: center;
  align-self: center;
`;

export const AboutImage = styled.img<AboutCardProps>`
  aspect-ratio: auto 400 / 400;
  height: 100%;
  max-height: ${({ isNarrow }) => (isNarrow ? "400px" : "450px")};
  width: auto;
  max-width: ${({ isNarrow }) => (isNarrow ? "400px" : "450px")};
  border: 2px solid var(--white);
  border-radius: var(--standardBorderRadius);
`;

export const AboutContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AboutHeader = styled(H3)<AboutCardProps>`
  text-align: ${({ isNarrow }) => (isNarrow ? "center" : "left")};

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 40px;
    font-weight: 600;
  }
`;

export const AboutText = styled(H5)<AboutCardProps>`
  text-align: ${({ isNarrow }) => (isNarrow ? "center" : "left")};

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 22.4px;
    margin-bottom: 16px;
  }
`;
