import styled from "styled-components/macro";
import { H2, H4 } from "../../textElements";

type DevExpertiseProps = {
  isMobile: boolean;
};

export const DevExpertiseCard = styled.div<DevExpertiseProps>`
  display: grid;
  grid-template-columns: ${({ isMobile }) => (isMobile ? "1fr" : "1fr 1fr")};
  gap: 24px;
  text-align: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
  background-color: var(--grayscale2);
  border: 3px solid var(--grayscale4);
  border-radius: 8px;
`;

export const SectionHeader = styled(H2)`
  color: var(--darkPurple);

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 40px;
    font-weight: 500;
  }
`;

export const SectionContent = styled(H4)`
  color: var(--grayscale6);
`;
