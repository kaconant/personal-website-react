import styled from "styled-components/macro";
import { H4 } from "../../textElements";

type AboutCardProps = {
  isMobile: boolean;
};

export const AboutCard = styled.div<AboutCardProps>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: 24px;
  padding: 20px;
  background: var(--grayscale2);
  border: 3px solid var(--grayscale4);
  border-radius: 8px;
  width: fit-content;
  align-items: center;
  align-self: center;
`;

export const AboutImage = styled.img`
  height: 100%;
  max-height: 450px;
  width: auto
  max-width: 450px;
  border: 2px solid var(--white);
  border-radius: 8px;
`;

export const AboutContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AboutText = styled(H4)<AboutCardProps>`
  text-align: ${({ isMobile }) => (isMobile ? "center" : "left")};
`;
