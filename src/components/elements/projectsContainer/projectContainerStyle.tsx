import styled from "styled-components/macro";
import { H2 } from "../../textElements";

type ProjectContainerProps = {
  isNarrow: boolean;
};

export const ProjectContainerCard = styled.section<ProjectContainerProps>`
  display: grid;
  grid-template-columns: ${({ isNarrow }) => (isNarrow ? "1fr" : "1fr 1fr")};
  gap: 24px;
`;

export const ProjectCard = styled.div<ProjectContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 3px solid var(--grayscale4);
  background: var(--white);
  padding: 24px;
  border-radius: var(--standardBorderRadius);
`;

export const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProjectHeader = styled(H2)`
  line-height: 40px;
  color: var(--darkPurple);
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 40px;
    font-weight: 500;
  }
`;

export const ProjectImage = styled.img`
  aspect-ratio: auto 1 / 1;
  height: auto;
  width: 100%;
  background: var(--shell);
  border: 1px solid var(--white);
  border-radius: var(--standardBorderRadius);
`;

export const ProjectLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
