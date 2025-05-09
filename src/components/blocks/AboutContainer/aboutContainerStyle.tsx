import styled from "styled-components";
import { H3Bold, P1 } from "../../Typography";

type AboutCardProps = {
  isNarrow: boolean;
};

export const AboutCard = styled.section<AboutCardProps>`
  display: flex;
  flex-direction: ${({ isNarrow }) => (isNarrow ? "column" : "row")};
  gap: 48px;
  padding: 20px;
  background: var(--primaryColor);
  border: 2px solid var(--accentGreen);
  border-radius: var(--standardBorderRadius);
  width: ${({ isNarrow }) => (isNarrow ? "100%" : "80%")};
  align-items: center;
  align-self: center;
`;

export const AboutImage = styled.img<AboutCardProps>`
  aspect-ratio: auto 400 / 400;
  height: 100%;
  max-height: ${({ isNarrow }) => (isNarrow ? "400px" : "450px")};
  width: auto;
  max-width: ${({ isNarrow }) => (isNarrow ? "400px" : "450px")};
  border: 2px solid var(--accentGreen);
  border-radius: var(--standardBorderRadius);
`;

export const AboutContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AboutHeader = styled(H3Bold)<AboutCardProps>`
  text-align: ${({ isNarrow }) => (isNarrow ? "center" : "left")};

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 40px;
    font-weight: 600;
  }
`;

export const AboutText = styled(P1)<AboutCardProps>`
  text-align: ${({ isNarrow }) => (isNarrow ? "center" : "left")};

  @media only screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`;
