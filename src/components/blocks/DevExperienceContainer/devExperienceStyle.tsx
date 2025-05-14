import styled from "styled-components";
import { H3, P1 } from "../../Typography";

type DevExpertiseProps = {
  isNarrow: boolean;
};

export const DevExperienceSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const DevExpertiseCard = styled.div<DevExpertiseProps>`
  display: grid;
  grid-template-columns: ${({ isNarrow }) =>
    isNarrow ? "1fr" : "1fr 1fr 1fr 1fr"};
  gap: 24px;
  text-align: center;
`;

export const Section = styled.div`
  position: relative;
  padding: 12px;
  border-radius: var(--standardBorderRadius);
  background-color: var(--secondaryColor);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px; /* Thickness of the "border" */
    border-radius: var(--standardBorderRadius);
    background: repeating-linear-gradient(
      to right,
      #ffb3f3,
      #ffc6ec,
      #c9b6ff,
      #b3e5ff,
      #d1ffd6,
      #fff7b3,
      #ffb3f3
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
`;
export const SectionHeader = styled(H3)`
  color: var(--darkPurple);
  padding-bottom: 8px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 40px;
    font-weight: 500;
  }
`;

export const SectionContent = styled(P1)`
  padding: 8px 0;
  border-top: 2px solid var(--accentRose);
`;
