import styled from "styled-components/macro";
import { H3 } from "../../textElements";

type AboutCardProps = {
  isMobile: boolean;
};

export const AboutCard = styled.div<AboutCardProps>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: 24px;
  padding: 20px;
  background: var(--midPink);
  border: 3px solid var(--lightPink);
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
`;

export const AboutContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AboutText = styled(H3)<AboutCardProps>`
  text-align: ${({ isMobile }) => (isMobile ? "center" : "left")};
`;
