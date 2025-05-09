import styled from "styled-components";
import { H2 } from "../../Typography";

type ProjectsContainerProps = {
  isNarrow: boolean;
};

export const ProjectsContainerCard = styled.section<ProjectsContainerProps>`
  display: grid;
  grid-template-columns: ${({ isNarrow }) => (isNarrow ? "1fr" : "1fr 1fr")};
  gap: 48px;
`;

export const ProjectCard = styled.div<ProjectsContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--white);
  border: 2px solid var(--accentMauve);
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
  width: 80%;
  background: var(--shell);
  border: 1px solid var(--white);
  border-radius: var(--standardBorderRadius);
  align-self: center;
`;

export const ProjectLine = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
