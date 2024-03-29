import styled from "styled-components/macro";
import { H2, P1 } from "../../textElements";

type DevExpertiseProps = {
  isNarrow: boolean;
};

export const DevExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DevExpertiseCard = styled.div<DevExpertiseProps>`
  display: grid;
  grid-template-columns: ${({ isNarrow }) => (isNarrow ? "1fr" : "1fr 1fr")};
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
  border-radius: var(--standardBorderRadius);
`;

export const SectionHeader = styled(H2)`
  color: var(--darkPurple);

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 40px;
    font-weight: 500;
  }
`;

export const SectionContent = styled(P1)`
  color: var(--black);
`;
